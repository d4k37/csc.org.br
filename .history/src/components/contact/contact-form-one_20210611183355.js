import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";

const ContactFormOne = () => {
  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Escreva uma mensagem \n para nós.`}
               
              />
              <p className="block-text mb-30 pr-10">
                Mande uma mensagem para a Comunidade Servos da Cruz.{" "}
              </p>
              <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:needhelp@azino.com">pazebem@csc.org.br</a>
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

              <div className="footer-social black-hover">
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
          </Col>
          <Col lg={7}>
            <form className="contact-form-validated contact-page__form form-one mb-40">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="subject" className="sr-only">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
