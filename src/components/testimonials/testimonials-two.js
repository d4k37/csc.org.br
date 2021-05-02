import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage1 from "../../assets/images/resources/testimonial-2-1.png";
import testimonialImage2 from "../../assets/images/resources/testimonial-2-2.png";
import testimonialImage3 from "../../assets/images/resources/testimonial-2-3.jpg";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    image: testimonialImage1,
    name: "Dom José Carlos",
    designation: "Bisbo",
    text: "A Comunidade Servos da Cruz é a \n Expressão do Amor que Serve",
  },
  {
    image: testimonialImage2,
    name: "Pe. Marcelo",
    designation: "Padre",
    text:
      "Devemos agir no hoje, pensando no amanhã, principalmente nas boas ações, \n pois nem as maiores riquezas do mundo compram a felicidade verdadeira e nem o céu!",
  },
  {
    image: testimonialImage1,
    name: "Frei Vicente",
    designation: "Frei",
    text:
      "Aqui, nesta comunidade, encontramos uma igreja em saída... \nque vai ao encontro de Jesus nas crianças e famílias e vive experiências de amor e misericórdia",
  },
  {
    image: testimonialImage2,
    name: "Pe. Felipe",
    designation: "Padre",
    text: "Na Comunidade Servos da Cruz se percebe o frescor do evangelho.",
  },
];

const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="testimonials-two">
      <Container>
        <div className="team-about__top">
          <Row className="align-items-center">
            <Col md={12} lg={7}>
              <BlockTitle
                title={`O que eles dizem \n sobre a comunidade.`}
                tagLine="Testemunhos"
              />
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
                Sonhamos em oferecer um acolhimento cada vez mais digno aos
                nossos pequenos e por este objetivo batalhamos a cada dia, e às
                vezes, por falta de recursos, não conseguimos, mas quando
                conseguimos algo, não nos resta dúvidas que é graças aos grandes
                corações que encontramos pelo caminho!
              </p>
            </Col>
          </Row>
        </div>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {TESTIMONIALS_DATA.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {TESTIMONIALS_DATA.map(({ designation, name, text }, index) => (
            <SwiperSlide key={index}>
              <p>{text}</p>
              <div className="testimonials-two__meta">
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
