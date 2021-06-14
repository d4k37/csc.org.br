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

import PageHeader from "../components/page-header";
import testePDF from "../../content/transparencia/teste.pdf"
import {transparenciaTabela} from "../templates/transparencia/lista/transparenciatabela"



  const Transparencia = () =>{
    
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Transparência CSC" crumbTitle="Transparência" />
     <main>
        <menu>
                  <li src="/donate">Balanços Patrimoniais</li>
                   <li>Contas Bancárias</li>
                   <li>Contratos</li>
                   <li>Despesas</li>
                   <li>Editais</li>
                   <li>Estatuto e documentos Institucionais</li>
                   <li>Planilhas e Demonstrativos</li>
                   <li>Receitas</li>
                   <li>Recursos Humanos</li>
                   <li>Relatórios e Certificações</li>
                   <li>Serviços Prestados</li>
        </menu>
     </main>
      <transparenciaTabela/>
   <Footer/>
   
   </Layout>
   
      );
    
};
export default Transparencia;