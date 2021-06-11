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
import PageHeader from "../components/page-header";
import testePDF from "../../content/transparencia/teste.pdf"


  const Transparencia = () =>{
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />

       
 <main>
 <PageHeader title="Transparência CSC" crumbTitle="Transparência" />
   <tbody className="title">
  
      
       <div className="pesquisa">
           <p>Pesquisar</p>
           <input></input>
       </div>
       
       <table>
        <tr className="linha">
            <td>Nome</td>
            <td>ano</td>
            <td>mês</td>
            <td>arquivo</td>
            <td>notas</td>
        </tr>
        <tr className="linha0">
            <td>primeiro arquivo</td>
            <td>2021</td>
            <td>junho</td>
            <td><a href={testePDF}>Baixe</a></td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        <tr className="linha0">
            <td>quarto arquivo</td>
            <td>2021</td>
            <td>junho</td>
            <td>visualizar</td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        <tr className="linha0">
            <td>quinto arquivo</td>
            <td>2019</td>
            <td>junho</td>
            <td>visualizar</td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        <tr className="linha0">
            <td>segundo arquivo</td>
            <td>2018</td>
            <td>agosto</td>
            <td>visualizar</td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        </table>
      
        <div className="changeView">
            <button>Anterior</button>
            <p>1</p>
            <button>Próximo</button>
        </div>
   </tbody>
     
 </main>

   <Footer/>
   </Layout>
   
      );
    
};
export default Transparencia;