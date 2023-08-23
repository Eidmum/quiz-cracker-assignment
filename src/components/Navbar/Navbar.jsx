import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toogleState = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <div className="nav-container">
      <div className="brand">
        <AcademicCapIcon className="navicon text-blue-500" />
        <span className="brandname">Moodle</span>
      </div>

      <div className="nav-items d-flex flex-column align-items-center">
        <div>
          {open ? (
            <XMarkIcon
              onClick={toogleState}
              className="navicon text-blue-500 d-lg-none"
            />
          ) : (
            <AdjustmentsHorizontalIcon
              onClick={toogleState}
              className="navicon text-blue-500 d-lg-none"
            />
          )}
        </div>
        <div
          className={`d-flex flex-column flex-lg-row text-center ${
            open || "d-none d-lg-block"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/statictics">Statictics</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
