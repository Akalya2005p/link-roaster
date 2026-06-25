import { HiOutlineDocumentText, HiOutlineSparkles } from "react-icons/hi";

import { FaGavel, FaGlobe } from "react-icons/fa";

function RoastCard({ roast }) {
  const formattedDate = roast.createdAt
    ? new Date(roast.createdAt._seconds * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <div
      className="
    bg-white/80
    backdrop-blur-md
    rounded-2xl
    shadow-lg
    border
    border-white/30
    p-6
    mb-6
    hover:shadow-2xl
    hover:-translate-y-1
    transition-all
    duration-300
  "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{roast.title}</h2>

          {formattedDate && (
            <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
          )}
        </div>
      </div>

      {/* URL */}
      <a
        href={roast.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 hover:underline mb-6"
      >
        <FaGlobe />
        Visit Website
      </a>

      {/* Summary */}
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-2">
          <HiOutlineDocumentText size={22} />
          Summary
        </h3>

        <p className="text-gray-700 leading-relaxed">{roast.summary}</p>
      </div>

      {/* Roast */}
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-600 mb-2">
          <HiOutlineSparkles size={22} />
          Roast
        </h3>

        <p className="text-gray-700 leading-relaxed italic">"{roast.roast}"</p>
      </div>

      {/* Verdict */}
      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700 mb-2">
          <FaGavel />
          Verdict
        </h3>

        <p className="font-medium text-gray-800">{roast.verdict}</p>
      </div>
    </div>
  );
}

export default RoastCard;
