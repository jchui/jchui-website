import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="columns">
        <div className="column">
          <Link to="../../">
            <p className="logo">
              <strong>Jeremy </strong>
              Chui
            </p>
          </Link>
        </div>
        <div className="column">
          <ul>
            <li><Link to="">About</Link></li>
            <li><Link to="">Résumé</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

export default Header
