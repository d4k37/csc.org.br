import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two"
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <Layout pageTitle="Contato || Comunidade Servos da Cruz">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Contato" crumbTitle="Contato" />
      <ContactFormOne />
      <ContactCardCarousel />
      <GoogleMap extraClass="contact" />
      <Footer />
    </Layout>
  );
};

export default Contact;
