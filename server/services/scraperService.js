const axios = require("axios");
const cheerio = require("cheerio");

const scrapeWebsite = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
    },
    timeout: 10000,
  });

  const html = response.data;
  const $ = cheerio.load(html);

  // Better title extraction
  let title =
    $('meta[property="og:title"]').attr("content") ||
    $('meta[name="twitter:title"]').attr("content") ||
    $("h1").first().text().trim() ||
    $("title").text().trim();

  // Clean unwanted words/icons
  title = title
    .replace(/icon-[a-z0-9-]+/gi, "")
    .replace(/menu-open|menu-close/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  // Prevent extremely long titles
  if (title.length > 120) {
    title = title.substring(0, 120) + "...";
  }

  // Remove unwanted elements
  $("script").remove();
  $("style").remove();
  $("noscript").remove();
  $("svg").remove();

  let content = "";

  // Prefer paragraph content
  $("p").each((index, element) => {
    const text = $(element).text().trim();

    if (text.length > 20) {
      content += text + " ";
    }
  });

  // Fallback if no paragraph content found
  if (!content.trim()) {
    content = $("body").text();
  }

  const cleanedContent = content
    .replace(/\s+/g, " ")
    .replace(/\n/g, " ")
    .trim()
    .substring(0, 5000);

  return {
    title,
    content: cleanedContent,
  };
};

module.exports = scrapeWebsite;
