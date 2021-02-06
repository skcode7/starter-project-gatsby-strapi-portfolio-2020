import React from "react"
import { FaLaptopCode, FaHtml5, FaServer } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaLaptopCode className="service-icon" />,
    title: "Aplicaciones Empresariales",
    text: `Desarrollo de sistemas de misión crítica apoyado en herramientas de desarrollo LowCode. Sistemas de Nómina, Facturación Electrónica, Inventario, entre otros.`,
    url: "https://facturacion.encaladadiaz.com/",
  },
  {
    id: 3,
    icon: <FaHtml5 className="service-icon" />,
    title: "Sitios Web",
    text: `Desarrollo y mantenimiento de sitios web estáticos y dinámicos, diseño, branding.`,
    url: "https://desarrolloamedida.net/"
  },
  {
    id: 2,
    icon: <FaServer className="service-icon" />,
    title: "Administración de Sistemas",
    text: `Gestión y configuración de servidores On Premise o en la nube. VPN, firewall, virtualización.`,
    url: "#",
  },
]
