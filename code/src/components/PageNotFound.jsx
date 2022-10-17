import React from 'react';
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate= useNavigate();
  const returnToDefaultPage = () => {
    navigate("/");
  };

  return (
    <section className="pagenotfound-container">
      <div className="pagenotfound-text">
        <h1>Page Not Found! </h1>
        <p>
          Whoops! Seems like you tried navigating to a page that does not exist.
        </p>
        <p>To return to our homepage, click the button below!</p>
      </div>
      <button
        className="pagenotfound-button"
        type="button"
        onClick={returnToDefaultPage}
      >
        Return to home page
      </button>
    </section>
  );
}
 
export default PageNotFound;