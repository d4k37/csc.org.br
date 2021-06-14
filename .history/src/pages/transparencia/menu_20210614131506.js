import React from "react"
import Layout from "../../components/layout"

import HeaderTwo from "../../components/header/header-two"
import StickyHeader from "../../components/header/sticky-header"

import Footer from "../../components/footer"


import PageHeader from "../../components/page-header";

import { Link } from "gatsby"



  const Menu = () =>{
    
      return(

   <Layout >
     
     <main className="container">
        <menu >
            <label for="transparencia">Transparência</label>
            <select name="transparencia" id="transparencia">
                <option Link="/transparencia"><Link to="/transparencia">Transparência</Link><br/></option>
                <option><Link to="/">Balanços Patrimoniais</Link><br/></option>
                <option><Link to="/">Contas Bancárias</Link><br/></option>
                <option><Link to="/">Contratos</Link><br/></option>
                <option><Link to="/">Despesas</Link><br/></option>
                <option><Link to="/">Editais</Link><br/></option>
                <option><Link to="/">Estatuto e documentos Institucionais</Link><br/></option>
                <option><Link to="/">Planilhas e Demonstrativos</Link><br/></option>
                <option><Link to="/">Receitas</Link><br/></option>
                <option><Link to="/">Recursos Humanos</Link><br/></option>
                <option><Link to="/">Relatórios e Certifiações</Link><br/></option>
                <option><Link to="/">Serviços Prestados</Link><br/></option>
            </select>
        
        
        
        
        
        
        
        
        
        
        
        
        </menu>
        
     </main>
     
  
   </Layout>
   
      );
    
};
export default Menu;