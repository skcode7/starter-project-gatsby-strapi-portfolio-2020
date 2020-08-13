import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Servicios" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text, url } = service
          return <article key={id} className="service">
            <a href={url} target="_blank" alt="Icono con link a la web">{icon}</a>
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        })}
      </div>
    </section>
  )
}

export default Services
