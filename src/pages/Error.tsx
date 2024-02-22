import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../constants/app_routes";

export default function Favorites() {
  return (
    <React.Fragment>
      <div>404 Not Found!</div>
      <Link to={AppRoutes.Home}>Back to Home</Link>
    </React.Fragment>
  );
}
