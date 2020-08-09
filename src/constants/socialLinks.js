import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaWordpress, FaBlogger, FaYoutube
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/karlosrocker",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/skcode7/",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/carlos-encalada-4830b383/",
  },
  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "facebook.com/karlos.encalada.3/",
  },
  {
    id: 5,
    icon: <FaWordpress className="social-icon"></FaWordpress>,
    url: "https://karlosencalada.wordpress.com/",
  },
  {
    id: 6,
    icon: <FaBlogger className="social-icon"></FaBlogger>,
    url: "https://sk-forever.blogspot.com/",
  },
  {
    id: 7,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/c/CarlosEncalada7/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
