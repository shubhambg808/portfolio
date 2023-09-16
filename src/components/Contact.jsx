import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
      <div>
        <img
          className="link_icon"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
          alt="gmail"
        />
        <a href={`mailto:shubhambagde808@gmail.com`}>
          shubhambagde808@gmail.com
        </a>
      </div>
      <div>
        <img
          className="link_icon"
          src="https://e7.pngegg.com/pngimages/953/528/png-clipart-instagram-icon-logo-desktop-computer-icons-instagram-miscellaneous-text.png"
          alt="insta"
        />
        <a href="https://www.instagram.com/_shubham_808/"> _shubhambagde808</a>
      </div>
      <div>
        <img
          className="link_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt="linkedin"
        />
        <a href="https://www.linkedin.com/in/shubham-bagde-5bb863209/">
          shubham Bagde
        </a>
      </div>
      <div>
        <img
          className="link_icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWbHedWKmTnmY4gynMyI41e-ocVvf5kSDp5WEFPobZg&s"
          alt="github"
        />
        <a href=" https://github.com/shubhambg808">shubham Bagde github</a>
      </div>
    </div>
  );
};

export default Contact;
