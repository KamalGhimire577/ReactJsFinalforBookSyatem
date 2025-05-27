import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // for redirection

  const handleLogout = () => {
    // Example: clear user data (auth token, etc.)
    // localStorage.removeItem("token"); // optional

    console.log("Logged out");

    // Redirect to home
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          📚 BookStore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        
          <Link to="/create" className="hover:underline">
            Create
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:underline">
            Home
          </Link>
          <Link to="/edit" className="block hover:underline">
            Edit
          </Link>
          <Link to="/single" className="block hover:underline">
            Single
          </Link>
          <Link to="/create" className="block hover:underline">
            Create
          </Link>
          <Link to="/login" className="block hover:underline">
            Login
          </Link>
          <Link to="/register" className="block hover:underline">
            Register
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left hover:underline"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
