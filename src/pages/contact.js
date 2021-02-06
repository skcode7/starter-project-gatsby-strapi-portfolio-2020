import React from "react"
import Layout from "../components/Layout"
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"

const contact = () => {
  return (
    <div>
      <h2>contact page</h2>
      <a href="https://t.me/karlosrocker" className="social-link">
        <FaTelegramPlane className="social-icon"></FaTelegramPlane>
      </a>
      <a href="https://wa.me/593963414955" className="social-link">
        <FaWhatsapp className="social-icon"></FaWhatsapp>
      </a>
    </div>
  )

}

export default contact
