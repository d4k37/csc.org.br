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
        <menu className="dropdown">
            <span>Mouse over me</span>
          <div className="dropdown-content">
              <p>Teste</p>
              <p>testa</p>
        
       
        </div>
        </menu>
        
     </main>
     
  
   </Layout>
   
      );
    
};
export default Menu;