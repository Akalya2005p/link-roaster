import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoastForm from "../components/RoastForm";
import RoastCard from "../components/RoastCard";

import { roastUrl, getRecentRoasts } from "../services/roastService";
import toast from "react-hot-toast";
function Home() {
  const [loading, setLoading] = useState(false);
  const [currentRoast, setCurrentRoast] = useState(null);
  const [recentRoasts, setRecentRoasts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecentRoasts();
  }, []);

  const fetchRecentRoasts = async () => {
    try {
      const data = await getRecentRoasts();
      setRecentRoasts(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoast = async (url) => {
    try {
      setLoading(true);
      setError("");

      const result = await roastUrl(url);

      setCurrentRoast(result.data);

      await fetchRecentRoasts();
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    /*  <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-100"> */
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100 ">
      {" "}
      <Navbar />
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1
          className="text-6xl
      font-black
      bg-gradient-to-r
      from-orange-500
      to-red-500
      bg-clip-text
      text-transparent
    "
        >
          Roast Any Website
        </h1>

        <p className="text-gray-600 mt-4 text-xl">
          Paste any URL and let AI summarize, roast and judge it.
        </p>
      </section>
      <div className="max-w-5xl mx-auto p-6">
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* URL Form */}
        <RoastForm onSubmit={handleRoast} loading={loading} />

        {/* Current Roast */}
        {currentRoast && (
          <>
            <h2 className="text-2xl font-bold mt-10 mb-4">Latest Roast</h2>

            <RoastCard roast={currentRoast} />
          </>
        )}

        {/* Recent Roasts */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Recent Roasts</h2>

        {recentRoasts.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            No roasts available yet.
          </div>
        ) : (
          recentRoasts.map((roast) => (
            <RoastCard key={roast.id} roast={roast} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
