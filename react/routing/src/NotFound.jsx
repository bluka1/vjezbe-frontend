import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Unfortunately, this page does not exist.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
