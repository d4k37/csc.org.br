import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/resources/video-1-1.jpg";

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card-two">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yUsxhcXuBc4"
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img src={videoImage} alt="" />
                <span
                  className="video-card-two__box-btn video-popup"
                  onClick={() => setOpen(true)}
                  onKeyDown={() => setOpen(true)}
                  role="button"
                  tabIndex={0}
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <h3>
                Sonhamos em oferecer um acolhimento cada vez mais digno aos
                nossos pequenos.
              </h3>
            </Col>
            <Col lg={5}>
              <p>
                Nosso Fundador relembra a doação do terreno da sede da
                Comunidade, há 25 anos, na tarde de louvor da Festa da
                Santíssima Trindade, quando um benfeitor ouvindo a história do
                desejo de formar comunidade disse "eu tinha 7 mil metros de
                terra e acabei de vender pra Deus..."{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
