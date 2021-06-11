import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import NavLinks from "./nav-links"

import logoDark from "../../assets/images/logo-dark.png"

const HeaderTwo = () => {
  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p>Comunidade Servos da Cruz</p>
          <div className="main-header__social">
            <a href="#none" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#none" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#none" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#none" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link to="/">
              <img src={logoDark} width="101" alt="" />
            </Link>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>

          <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:pazebem@csc.org.br">pazebem@csc.org.br</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Telefone</h3>
                <p>
                  <a href="tel:37-3212-4398">(37) 3212-4398</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-address"></i>
              <div className="header-info__box-content">
                <h3>Visite</h3>
                <p>Al. José Domingos dos Santos, 371 - Divinópolis, MG</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks extraClassName="dynamic-radius" />
          <Link className="thm-btn dynamic-radius" to="/contact">
            Doe
          </Link>
        </Container>
      </nav>
    </div>
  )
}

export default HeaderTwo
