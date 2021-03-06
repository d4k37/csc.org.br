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
                <div>
                <img href="../../content/casasdeacolhimento/IMG.jpg"/>
                </div>
    <div>
                <h1> Como funciona?</h1>
                <h2>As crian??as e adolescentes  acolhidas s??o retirados de suas fam??lias pelo Conselho Tutelar e Vara da Inf??ncia e Juventude por situa????es de risco pessoal e/ou social.

Atualmente o acolhimento ?? realizado nas seguintes unidades:

Casa S??o Francisco e Santa Clara: Recebe crian??as do sexo masculino de 0 a 9 anos.
Casas S??o Jo??o da Cruz: Recebe crian??as acima de 9 anos e adolescentes.

As casas funcionam em per??odo integral e todas as despesas de alimenta????o, limpeza, higiene, materiais escolares e tantas outras referentes as necessidades das crian??as, s??o de responsabilidade da entidade. A Comunidade Servos da Cruz desde sua funda????o sobrevive de doa????es e voluntariado para o desenvolvimento de seus trabalhos.</h2>
                <h1>Conviv??ncia Comunit??ria</h1>
                <h2>As crian??as acolhidas estudam na escola do bairro, convivem com as pessoas dos bairros vizinhos, fazem atividades como dan??a, jiu-jitsu e outros projetos em locais diversos e passam dias e finais de semana com os padrinhos da entidade, visando o contato com outras realidades e promovendo o respeito ??s diferen??as;</h2>
                <h1>Objetivo</h1>
                <h2>O objetivo de nossas casas de acolhimento ?? dar oportunidade e condi????es de vida digna ??s crian??as que est??o afastadas de suas fam??lias. Em um primeiro momento trabalhamos a fam??lia de origem para que possa receber a crian??a novamente, n??o sendo poss??vel as crian??as s??o preparadas para ado????o ou no caso dos adolescentes preparados para a autonomia na vida adulta.</h2>
    </div>
           </main>
            <Footer/>
        </Layout>
    )
}

export default casasDeAcolhimento;