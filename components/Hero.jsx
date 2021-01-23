import React from "react";
import { Link } from "react-router-dom";

//Icons
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper container">
        <div className="title">Classic Rides</div>
        <div className="subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          vel excepturi ut placeat nihil obcaecati asperiores quis! Odio rem ea
          ex iste nisi, laudantium voluptates! Ad quae culpa aperiam
          voluptatibus!
        </div>
        <Link to="/catalogo" className="link">
          <div className="button">Ver catálogo</div>
        </Link>
      </div>
      <div className="contact-icons">
        <div className="container">
          <WhatsAppIcon />
          <InstagramIcon />
          <PhoneIcon />
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Hero;
