import React from "react"
import Layout from "../components/layout"
import HeaderOne from "../components/header/header-one"
import HeaderTwo from "../components/header/header-two"
import StickyHeader from "../components/header/sticky-header"
import MainSLinkder from "../components/sLinkder/main-sLinkder"
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
import SomeSLinkder from "../components/sLinkder/some-sLinkder"
import TransparenciaBody from "../components/transparencia/transparencia-body"

import PageHeader from "../components/page-header";
import testePDF from "../../content/transparencia/teste.pdf"
import {transparenciaTabela} from "../templates/transparencia/Linksta/transparenciatabela"
import { Link } from "gatsby"



  const Transparencia = () =>{
    
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Transparência CSC" crumbTitle="Transparência" />
     <main>
        <menu>
                  <Link to="/donate">Balanços Patrimoniais</Link>
                   <Link to="/donate">Contas Bancárias</Link>
                   <Link to="/donate">Contratos</Link>
                   <Link to="/donate">Despesas</Link>
                   <Link to="/donate">Editais</Link>
                   <Link to="/donate">Estatuto e documentos Institucionais</Link>
                   <Link to="/donate">Planilhas e Demonstrativos</Link>
                   <Link to="/donate">Receitas</Link>
                   <Link to="/donate">Recursos Humanos</Link>
                   <Link to="/donate">Relatórios e Certificações</Link>
                   <Link to="/donate">Serviços Prestados</Link>
        </menu>
     </main>
      <transparenciaTabela/>
   <Footer/>
   
   </Layout>
   
      );
    
};
export default Transparencia;