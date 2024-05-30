import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-success">
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <p className="text-white text-center mb-2">"Created By Reza Arga"</p>
          <div className="d-flex align-items-center">
            <p className="text-white mb-0 me-3">Connect with me:</p>
            <Link
              to="https://www.instagram.com/reza_arga29/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-2 me-3"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.facebook.com/reza.arga.69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-2 me-3"
            >
              <FaFacebook />
            </Link>
            <Link
              to="mailto:reza.arga29@gmail.com"
              className="text-white fs-2 me-3"
            >
              <FaEnvelope />
            </Link>
            <Link to="tel:+6281617952015" className="text-white fs-2">
              <FaPhone />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
