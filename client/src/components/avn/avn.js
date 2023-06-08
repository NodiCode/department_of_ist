import React from 'react'
import "./avn.css"
import { Link } from 'react-router-dom'

const Avn = () => {
  return (
    <div className="avn_container">
        <Link to="https://priem.kumu.kg/"><div className="freshmanImage"></div></Link>

        <Link to="http://avn.kumu.kg/"><div className="avnImage"></div></Link>
    </div>
  )
}

export default Avn