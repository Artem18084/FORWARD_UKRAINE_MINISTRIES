import React from "react";
import { useSelector } from "react-redux";
import { Link, useMatch } from "react-router-dom";
export default function CustomLink({ children, to, ...props }) {
  const status = useSelector((state) => state.sidebarChecker.status);
  const match = useMatch(to);
  return (
    <Link
      to={to}
      {...props}
      className={`${match && !status ? "text-yellow-600" : "text-white"}`}
    >
      {children}
    </Link>
  );
}
