import React from "react";
import { AppRoutes } from "../../constants/app_routes";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 shadow-sm bg-white">
      <div className="flex items-center justify-between px-14">
        {/* Logo */}
        <div>
          <Link to={`${AppRoutes.Home}`}>
            <h2 className="text-3xl text-inactive">
              Sky<span className="text-black">Savvy</span>{" "}
            </h2>
          </Link>
        </div>

        {/* Nav */}
        <div className="hidden lg:flex lg:flex-row justify-center items-center gap-4">
          <div className="p-2 text-inactive hover:text-black">
            <Link to={`${AppRoutes.Home}`}> Home</Link>
          </div>

          <div className="p-2 text-inactive hover:text-black">
            <Link to={`${AppRoutes.Favorites}`}>Favorites</Link>
          </div>
          <div
            className="p-2 text-inactive hover:text-black"
            data-test="topNavBar-Courses"
          >
            <Link to={`${AppRoutes.Notes}`}>Notes</Link>
          </div>
        </div>

        {/* Authentication */}
        <div className="hidden lg:flex lg:flex-row justify-center items-center gap-4">
          <Link to={`${AppRoutes.Login}`}>
            <a>
              <div className="primary-button px-6 py-5 my-5">Login</div>
            </a>
          </Link>
          <Link to={`${AppRoutes.Signup}`}>
            <a>
              <div className="secondary-button px-6 py-5 my-5">Sign Up</div>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
