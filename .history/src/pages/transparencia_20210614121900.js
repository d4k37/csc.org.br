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
import CallhrefActionTwo from "../components/call-href-action/call-href-action-two"
import GalleryTestimonials from "../components/gallery/gallery-testimonials"
import GalleryHome from "../components/gallery/gallery-home"
import TestimonialsTwo from "../components/testimonials/testimonials-two"
import BlogHome from "../components/blog/blog-home"
import CallhrefAction from "../components/call-href-action/call-href-action"
import GoogleMap from "../components/google-map"
import BrandCarousel from "../components/brand-carousel"
import Footer from "../components/footer"
import SomeSader from "../components/sader/some-sader"
import TransparenciaBody from "../components/transparencia/transparencia-body"

import PageHeader from "../components/page-header";
import testePDF from "../../content/transparencia/teste.pdf"
import {transparenciaTabela} from "../templates/transparencia/asta/transparenciatabela"
import { a } from "gatsby"



  const Transparencia = () =>{
    
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Transparência CSC" crumbTitle="Transparência" />
     <main>
        <menu>
                  <a href="/">Balanços Patrimoniais</a>
                   <a href="/">Contas Bancárias</a>
                   <a href="/">Contrahrefs</a>
                   <a href="/">Despesas</a>
                   <a href="/">Editais</a>
                   <a href="/">Estatuhref e documenhrefs Institucionais</a>
                   <a href="/">Planilhas e Demonstrativos</a>
                   <a href="/">Receitas</a>
                   <a href="/">Recursos Humanos</a>
                   <a href="/">Relatórios e Certificações</a>
                   <a href="/">Serviços Prestados</a>
        </menu>
     </main>
      <transparenciaTabela/>
   <Footer/>
   
   </Layout>
   
      );
    
};
export default Transparencia;