import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <Layout pageTitle="Contact Page || Azino || Charity React Next Template">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="Contato" crumbTitle="Contact Us" />
      <ContactFormOne />
      <ContactCardCarousel />
      <GoogleMap extraClass="contact" />
      <Footer />
    </Layout>
  );
};

export default Contact;
