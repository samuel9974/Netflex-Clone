import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Footer Component - displays social media links and footer information
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social media icons section */}
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer data organized in columns */}
        <div className="footer_data">
          {/* Column 1: Company and legal info */}
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          {/* Column 2: Help and preferences */}
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          {/* Column 3: Account and terms */}
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          {/* Column 4: Support and privacy */}
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Service code section */}
        <div className="service_code">
          <p>Service Code</p>
        </div>

        {/* Copyright information */}
        <div className="copy-write">
          <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
