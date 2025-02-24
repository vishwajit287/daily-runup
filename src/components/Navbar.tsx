import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const projectTitle = import.meta.env.VITE_PROJECT_TITLE || "Runup App";

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/" className="text-xl font-bold text-gray-800">
          {projectTitle}
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition">
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-gray-800 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
