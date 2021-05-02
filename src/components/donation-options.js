import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import heartImage from "../assets/images/shapes/heart-2-1.png"

const DonationOptions = () => {
  return (
    <section className="donate-options pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="donate-options__content">
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Nos ajude a ajudar
                </p>
                <h3>
                  A Comunidade é mantida <br /> pela Divina Providência.
                </h3>
              </div>
              <p>
                Torne-se canal da Providência, <br /> seja um benfeitor, <br />a
                sua contribuição é livre e espontânea.{" "}
              </p>
              <div className="donate-options__call">
                <i className="azino-icon-telephone"></i>
                <div className="donate-options__call-content">
                  <p>
                    Tem alguma dúvida sobre como doar?? <br />{" "}
                    <span>Ligue agora</span>{" "}
                    <a href="tel:37-3212-4398">
                      (37) 3222-4726 ou (37) 3212-4398
                    </a>
                  </p>
                </div>
              </div>
              <div className="donate-options__icon-wrap">
                <div className="donate-options__icon">
                  <i className="azino-icon-dove"></i>
                  <h3>
                    <a href="#none">Conviva</a>
                  </h3>
                </div>
                <div className="donate-options__icon">
                  <i className="azino-icon-hamburger"></i>
                  <h3>
                    <a href="#none">Alimente</a>
                  </h3>
                </div>
                <div className="donate-options__icon">
                  <i className="azino-icon-family"></i>
                  <h3>
                    <a href="#none">Adote</a>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className="donate-options__form wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <input
                type="hidden"
                name="business"
                value="pazebem@comunidadeservosdacruz.org.br"
              ></input>
              <input type="hidden" name="currency_code" value="BRL"></input>
              <input type="hidden" name="cmd" value="_donations"></input>
              <input
                type="hidden"
                name="hosted_button_id"
                value="DR5Q68EKSCE76"
              />
              <h3 className="text-center">
                Doar para Comunidade Servos da Cruz
              </h3>
              <p className="text-center">
                Saiba as formas de doar e ajudar a Comunidade Servos da Cruz
              </p>
              <input type="text" id="donate-name" placeholder="Nome" />
              <input type="text" placeholder="E-mail" id="donate-amount" />
              <ul id="donate-amount__predefined" className="list-unstyled">
                <li>
                  <div>
                    <input type="radio" id="a10" value="10.00" name="amount" />
                    <label for="a10">R$10</label>
                  </div>
                </li>
                <li>
                  <input type="radio" id="a25" value="25.00" name="amount" />
                  <label for="a25">R$25</label>
                </li>
                <li>
                  <input type="radio" id="a50" value="50.00" name="amount" />
                  <label for="a50">R$50</label>
                </li>
              </ul>
              <button type="submit" className="thm-btn ">
                Doar com Paypal
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DonationOptions
