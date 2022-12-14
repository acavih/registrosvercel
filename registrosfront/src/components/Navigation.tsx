import React from 'react'
import { Link } from "gatsby";

export default function Navigation() {
  return (
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/attentions">Atenciones</Link></li>
      <li><Link to="/partners">Socios</Link></li>
    </ul>
  )
}