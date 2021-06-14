import React from "react"
import Layout from "../../components/layout"

import HeaderTwo from "../../components/header/header-two"
import StickyHeader from "../../components/header/sticky-header"

import Footer from "../../components/footer"


import PageHeader from "../../components/page-header";

import { Link } from "gatsby"
import "./menu.scss"


  const Menu = () =>{
    
      return(

   <Layout >
     
     <main className="container">
        <menu class="dropdown">
            <span>Mouse over me</span>
          <div class="dropdown-content">
              <a>Teste</a>
              <a>testa</a>
        
        <Link to="/">Balanços Patrimoniais</Link><br/>
        <Link to="/">Contas Bancárias</Link><br/>
        <Link to="/">Contratos</Link><br/>
        <Link to="/">Despesas</Link><br/>
        <Link to="/">Editais</Link><br/>
        <Link to="/">Estatuto e documentos Institucionais</Link><br/>
        <Link to="/">Planilhas e Demonstrativos</Link><br/>
        <Link to="/">Receitas</Link><br/>
        <Link to="/">Recursos Humanos</Link><br/>
        <Link to="/">Relatórios e Certifiações</Link><br/>
        <Link to="/">Serviços Prestados</Link><br/>
        </div>
        </menu>
        
     </main>
     
  
   </Layout>
   
      );
    
};
export default Menu;