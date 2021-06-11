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
                tagLine="Entre em Contato Conosco"
              />
              <p className="block-text mb-30 pr-10">
                Mande uma mensagem para a Comunidade Servos da Cruz.{" "}
              </p>
             

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
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu Nome"
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
                    placeholder="Seu Email"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    telefone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Seu Telefone"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="subject" className="sr-only">
                    assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Assunto"
                  />
                </div>
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    mensagem
                  </label>
                  <textarea
                    name="message"
                    placeholder="Escreva uma mensagem"
                    id="message"
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Enviar Email
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
