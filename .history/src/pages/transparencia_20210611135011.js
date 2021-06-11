import React from "react"
import Layout from "../components/layout"
import HeaderOne from "../components/header/header-one"
import HeaderTwo from "../components/header/header-two"
import StickyHeader from "../components/header/sticky-header"
import MainSlider from "../components/slider/main-slider"
import VideoCardTwo from "../components/videos/video-card-two"
import ServiceOne from "../components/services/service-one"
import AboutCounter from "../components/about/about-counter"
import CausesHome from "../components/causes/causes-home"
import DonationOptions from "../components/donation-options"
import TeamHome from "../components/team/team-home"
import CallToActionTwo from "../components/call-to-action/call-to-action-two"
import GalleryTestimonials from "../components/gallery/gallery-testimonials"
import GalleryHome from "../components/gallery/gallery-home"
import TestimonialsTwo from "../components/testimonials/testimonials-two"
import BlogHome from "../components/blog/blog-home"
import CallToAction from "../components/call-to-action/call-to-action"
import GoogleMap from "../components/google-map"
import BrandCarousel from "../components/brand-carousel"
import Footer from "../components/footer"
import SomeSlider from "../components/slider/some-slider"
import TransparenciaBody from "../components/transparencia/transparencia-body"
import './transparencia.scss'

  const Transparencia = () =>{
      return(

   <Layout pageTitle="ABLUBLE">
      

       
 <main>
     <section className="title">
   <tbody>
        <li>
            <ul>Nome</ul>
            <ul>ano</ul>
            <ul>mês</ul>
            <ul>arquivo</ul>
            <ul>notas</ul>
        </li>
        <li>
            <ul>primeiro arquivo</ul>
            <ul>2021</ul>
            <ul>junho</ul>
            <ul>visualizar</ul>
            <ul>descrição do primeiro arquivo</ul>
        </li>
   </tbody>
     </section>
 </main>

   
   </Layout>
   
      );
    
};
export default Transparencia;