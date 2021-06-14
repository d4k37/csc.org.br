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
import { Link } from "gatsby"
import "./transparencia.scss"


  const Transparencia = () =>{
    
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Transparência CSC" crumbTitle="Transparência" />
     <main className="container">
        <menu >
        <Link to="/transparencia/balancos-patrimoniais">Balanços Patrimoniais</Link><br/>
        <Link to="/transparencia/contas-bancarias">Contas Bancárias</Link><br/>
        <Link to="/transparencia/contratos">Contratos</Link><br/>
        <Link to="/transparencia/despesas">Despesas</Link><br/>
        <Link to="/transparencia/editais">Editais</Link><br/>
        <Link to="/transparencia/estatuto-e-documentos-institucionais">Estatuto e documentos Institucionais</Link><br/>
        <Link to="/transparencia/planilhas-e-demonstrativos">Planilhas e Demonstrativos</Link><br/>
        <Link to="/transparencia/receitas">Receitas</Link><br/>
        <Link to="/transparencia/recursos-humanos">Recursos Humanos</Link><br/>
        <Link to="/transparencia/relatorios-e-certificacoes">Relatórios e Certifiações</Link><br/>
        <Link to="/transparencia/servicos-prestados">Serviços Prestados</Link><br/>
        </menu>
        
     </main>
     
   <Footer/>
   
   </Layout>
   
      );
    
};
export default Transparencia;