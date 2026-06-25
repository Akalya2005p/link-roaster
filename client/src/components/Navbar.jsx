import { FaFire } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white py-5 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-3">
        <FaFire size={28} className="text-orange-500" />

        <h1 className="text-3xl font-bold tracking-wide">Link Roaster</h1>
      </div>
    </nav>
  );
}

export default Navbar;
