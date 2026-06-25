import { useState } from "react";
import { FaLink, FaBolt } from "react-icons/fa";

function RoastForm({ onSubmit, loading }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <div
      className="
        bg-white/80
        backdrop-blur-md
        rounded-3xl
        shadow-xl
        border
        border-gray-200
        p-8
      "
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* URL Input */}
        <div className="relative">
          <FaLink
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="url"
            placeholder="Paste a URL (e.g. https://react.dev)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="
              w-full
              pl-12
              pr-4
              py-4
              border
              border-gray-300
              rounded-xl
              text-gray-800
              focus:outline-none
              focus:ring-2
              focus:ring-slate-500
              focus:border-slate-500
              transition-all
            "
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex
              items-center
              gap-2
              bg-slate-900
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              shadow-md
              hover:bg-slate-800
              hover:shadow-lg
              transition-all
              disabled:opacity-70
              disabled:cursor-not-allowed
            "
          >
            <FaBolt size={14} />

            {loading ? "Roasting..." : "Roast It"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RoastForm;
