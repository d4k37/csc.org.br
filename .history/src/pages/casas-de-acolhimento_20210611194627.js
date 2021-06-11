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
import imageIMG from "../../content/casasdeacolhimento/IMG.jpg"


const casasDeAcolhimento = () =>{
    return(
        <Layout pageTitle="Casas de Acolhimento || Comunidade Servos da Cruz">
            <HeaderTwo/>
            <StickyHeader />
            <PageHeader title="Casas de Acohimento" crumbTitle="Casas de Acolhimento" />
            
            <main>
                <img href={imageIMG}/>
    <div>
                <h1> Como funciona?</h1>
                <h2>As crianças e adolescentes  acolhidas são retirados de suas famílias pelo Conselho Tutelar e Vara da Infância e Juventude por situações de risco pessoal e/ou social.

Atualmente o acolhimento é realizado nas seguintes unidades:

Casa São Francisco e Santa Clara: Recebe crianças do sexo masculino de 0 a 9 anos.
Casas São João da Cruz: Recebe crianças acima de 9 anos e adolescentes.

As casas funcionam em período integral e todas as despesas de alimentação, limpeza, higiene, materiais escolares e tantas outras referentes as necessidades das crianças, são de responsabilidade da entidade. A Comunidade Servos da Cruz desde sua fundação sobrevive de doações e voluntariado para o desenvolvimento de seus trabalhos.</h2>
                <h1>Convivência Comunitária</h1>
                <h2>As crianças acolhidas estudam na escola do bairro, convivem com as pessoas dos bairros vizinhos, fazem atividades como dança, jiu-jitsu e outros projetos em locais diversos e passam dias e finais de semana com os padrinhos da entidade, visando o contato com outras realidades e promovendo o respeito às diferenças;</h2>
                <h1>Objetivo</h1>
                <h2>O objetivo de nossas casas de acolhimento é dar oportunidade e condições de vida digna às crianças que estão afastadas de suas famílias. Em um primeiro momento trabalhamos a família de origem para que possa receber a criança novamente, não sendo possível as crianças são preparadas para adoção ou no caso dos adolescentes preparados para a autonomia na vida adulta.</h2>
    </div>
           </main>
            <Footer/>
        </Layout>
    )
}

export default casasDeAcolhimento;