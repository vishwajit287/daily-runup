import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the {import.meta.env.VITE_PROJECT_TITLE} App</h1>
      <p className="text-lg text-gray-600 mt-2">Manage your entries efficiently.</p>
      <Link to="/dashboard" className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
