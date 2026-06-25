const validateUrl = require("../utils/validateUrl");
const scrapeWebsite = require("../services/scraperService");
const generateRoast = require("../services/openRouterService");

const {
  saveRoast,
  findRoastByUrl,
  getRecentRoasts,
} = require("../services/firestoreService");

const roastUrl = async (req, res) => {
  try {
    const { url } = req.body;

    // URL required
    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    // Validate URL format
    if (!validateUrl(url)) {
      return res.status(400).json({
        success: false,
        message: "Invalid URL",
      });
    }

    // Check if roast already exists
    const existingRoast = await findRoastByUrl(url);

    if (existingRoast) {
      return res.status(200).json({
        success: true,
        cached: true,
        data: existingRoast,
      });
    }

    // Scrape website
    const scrapedData = await scrapeWebsite(url);

    // Generate AI roast
    const aiResponse = await generateRoast(
      scrapedData.title,
      scrapedData.content,
    );

    const roastData = {
      url,
      title: scrapedData.title,
      summary: aiResponse.summary,
      roast: aiResponse.roast,
      verdict: aiResponse.verdict,
    };

    // Save to Firestore
    const roastId = await saveRoast(roastData);

    return res.status(200).json({
      success: true,
      cached: false,
      data: {
        id: roastId,
        ...roastData,
      },
    });
  } catch (error) {
    console.error("Roast Error:", error);

    let message = "Something went wrong";

    // Website not found
    if (
      error.code === "ENOTFOUND" ||
      error.code === "EAI_AGAIN" ||
      error.message?.includes("ENOTFOUND")
    ) {
      message = "Website not found. Please check the URL.";
    }

    // SSL / TLS errors
    else if (
      error.code === "EPROTO" ||
      error.message?.includes("SSL") ||
      error.message?.toLowerCase().includes("tls")
    ) {
      message = "Unable to connect to this website. Please check the URL.";
    }

    // Website blocks scraping
    else if (error.response?.status === 403) {
      message = "This website does not allow automated scraping.";
    }

    // Timeout
    else if (
      error.code === "ECONNABORTED" ||
      error.message?.toLowerCase().includes("timeout")
    ) {
      message = "Website took too long to respond.";
    }

    // Connection refused
    else if (error.code === "ECONNREFUSED") {
      message = "Unable to connect to this website.";
    }

    // Fallback
    else {
      message = error.message || "Something went wrong";
    }

    return res.status(500).json({
      success: false,
      message,
    });
  }
};

const recentRoasts = async (req, res) => {
  try {
    const roasts = await getRecentRoasts();

    return res.status(200).json({
      success: true,
      count: roasts.length,
      data: roasts,
    });
  } catch (error) {
    console.error("Recent Roasts Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  roastUrl,
  recentRoasts,
};
