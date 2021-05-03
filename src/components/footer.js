import React from "react"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { Container, Row, Col } from "react-bootstrap"
import logoLight from "../assets/images/logo-light.png"
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg"
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg"

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link to="/">
                  <img
                    src={logoLight}
                    className="footer-widget__logo"
                    width="101"
                    alt=""
                  />
                </Link>
                <p>Comunidade Servos da Cruz</p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#none">
                      <i className="azino-icon-telephone"></i>(37) 3222-4726
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                      <i className="azino-icon-email"></i>
                      pazebem@csc.org.br
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                      <i className="azino-icon-pin"></i>Alameda José Domingos
                      dos Santos, 371 - Vivendas da Exposição - Divninópolis, MG
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link to="/#">Institucional</Link>
                  </li>
                  <li>
                    <Link to="/#">Sobre</Link>
                  </li>
                  <li>
                    <Link to="/#">Notícias</Link>
                  </li>
                  <li>
                    <Link to="/#">Eventos</Link>
                  </li>
                  <li>
                    <Link to="/#">Site Map</Link>
                  </li>
                  <li>
                    <Link to="/#">Contato</Link>
                  </li>
                  <li>
                    <Link to="/causes">Doe</Link>
                  </li>
                  <li>
                    <Link to="/contact">Transparência</Link>
                  </li>
                  <li>
                    <Link to="/contact">Termos</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  {/* <li>
                    <img src={blogPost1} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link to="/news-details">
                        You can help the poor in need
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <img src={blogPost2} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link to="/news-details">Rise fund for Healthy Food</Link>
                    </h3>
                  </li> */}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p>
                  Assine nossa newsletter e fique por dentro sobre as novidades
                </p>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Seu melhor e-mail
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Seu melhor e-mail"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Assinar agora
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2021 Comunidade Servos da Cruz</p>
          <div className="footer-social">
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
        </div>
      </div>
    </section>
  )
}

export default Footer
