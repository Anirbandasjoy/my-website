import React from "react";
import "./social.css";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <div className="spot frist-sport"></div>
      <div className="social-icon">
        <a href="https://github.com/Anirbandasjoy">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/joy-das-3b71142a8">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="social-icon">
        <a href="https://wa.link/aholdw">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="spot second-sport"></div>
    </div>
  );
};

export default SocialBar;
