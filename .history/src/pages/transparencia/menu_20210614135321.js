import React from "react"
import Layout from "../../components/layout"

import HeaderTwo from "../../components/header/header-two"
import StickyHeader from "../../components/header/sticky-header"

import Footer from "../../components/footer"


import PageHeader from "../../components/page-header";

import { Link } from "gatsby"
import "./menu.scss"


  const div = () =>{
    
      return(

   <Layout >
     <main>

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
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
  </div>
</div>

    </main>

  
   </Layout>
   
      );
    
};
export default div;