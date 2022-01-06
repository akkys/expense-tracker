import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpense Tracker <i className="bi bi-credit-card-fill"></i>
        </div>
        <div className="header-btn">
          <a
            href="https://github.com/akkys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github">
              <small>/akkys</small>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
