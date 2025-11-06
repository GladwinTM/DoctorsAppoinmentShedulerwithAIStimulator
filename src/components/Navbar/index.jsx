import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { useNavigate, NavLink, Link } from "react-router-dom";

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // redirect back to login
  };

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-green-800 text-2xl font-extrabold tracking-widest">
                A M R U T A M
              </span>
            </Link>
          </div>

          {/* Center: Links (desktop) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-1 transition-colors ${isActive ? "text-green-700" : "text-gray-600 hover:text-gray-900"}`
              }
            >
              Home
            </NavLink>
            <a href="#doctors" className="px-2 py-1 text-gray-600 hover:text-gray-900 transition-colors">
              Find Doctors
            </a>
            <NavLink to="/about" className={({ isActive }) => `px-2 py-1 transition-colors ${isActive ? "text-green-700" : "text-gray-600 hover:text-gray-900"}`}>
              About
            </NavLink>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            {!currentUser && (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              >
                Login
              </Link>
            )}
            {currentUser && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 shadow-sm transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <svg className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="space-y-1 px-4 py-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base ${isActive ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"}`
              }
            >
              Home
            </NavLink>
            <a href="#doctors" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-50">
              Find Doctors
            </a>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded-md px-3 py-2 text-base ${isActive ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"}`}>
              About
            </NavLink>
            <div className="mt-2 flex gap-2">
              {!currentUser && (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-center text-gray-700 hover:bg-gray-50"
                >
                  Login
                </Link>
              )}
              {currentUser && (
                <button
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                  className="flex-1 rounded-full bg-green-700 px-4 py-2 text-white hover:bg-green-800"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
