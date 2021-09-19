import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Nav">
      <button className="Interact">
        <Link to="/" style={{ padding: "10px" }}>
          HOME
        </Link>
      </button>
      <button className="Interact">
        <Link to="/chars" style={{ padding: "10px" }}>
          CHARACTERS
        </Link>
      </button>
    </div>
  );
}
