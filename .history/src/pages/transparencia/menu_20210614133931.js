import React from "react"
import Layout from "../../components/layout"

import HeaderTwo from "../../components/header/header-two"
import StickyHeader from "../../components/header/sticky-header"

import Footer from "../../components/footer"


import PageHeader from "../../components/page-header";

import { Link } from "gatsby"
import "./div.scss"


  const div = () =>{
    
      return(

   <Layout >
     
     <main>
        <div className="dropdown">
            <span>Mouse over me</span>
          <div className="dropdown-content">
              <p>Teste</p>
              <p>testa</p>
        
       
        </div>
        </div>
        
     </main>
     
  
   </Layout>
   
      );
    
};
export default div;