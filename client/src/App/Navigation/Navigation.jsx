import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Fragment>
      <nav className="w-full h-16 flex items-center p-2">
        <ul className="flex text-blue-600 items-center">
          <li className="mr-5">
            <Link to="/" className="text-xl">
              Flashtrack
            </Link>
          </li>

          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="mr-5" to="/journals">
              Journals
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
