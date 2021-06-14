import React from "react"
import Layout from "../components/layout"
import HeaderOne from "../components/header/header-one"
import HeaderTwo from "../components/header/header-two"
import StickyHeader from "../components/header/sticky-header"
import MainSader from "../components/sader/main-sader"
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
import SomeSader from "../components/sader/some-sader"
import TransparenciaBody from "../components/transparencia/transparencia-body"

import PageHeader from "../components/page-header";
import testePDF from "../../content/transparencia/teste.pdf"
import {transparenciaTabela} from "../templates/transparencia/asta/transparenciatabela"



  const Transparencia = () =>{
    
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Transparência CSC" crumbTitle="Transparência" />
     <main>
        <menu>
                  <a onCack={href="/donate"}>Balanços Patrimoniais</a>
                   <a>Contas Bancárias</a>
                   <a>Contratos</a>
                   <a>Despesas</a>
                   <a>Editais</a>
                   <a>Estatuto e documentos Institucionais</a>
                   <a>Planilhas e Demonstrativos</a>
                   <a>Receitas</a>
                   <a>Recursos Humanos</a>
                   <a>Relatórios e Certificações</a>
                   <a>Serviços Prestados</a>
        </menu>
     </main>
      <transparenciaTabela/>
   <Footer/>
   
   </Layout>
   
      );
    
};
export default Transparencia;