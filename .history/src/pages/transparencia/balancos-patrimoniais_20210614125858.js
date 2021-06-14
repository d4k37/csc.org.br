import React from "react"
import Layout from "../../components/layout"

import HeaderTwo from "../../components/header/header-two"
import StickyHeader from "../../components/header/sticky-header"

import Footer from "../../components/footer"


import PageHeader from "../../components/page-header";

import { Link } from "gatsby"



  const balancosPatrimoniais = () =>{
    
      return(

   <Layout pageTitle="ABLUBLE">
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Balanços Patrimoniais" crumbTitle="Balanços Patrimoniais" />
     <main className="container">
       
        
     </main>
     
   <Footer/>
   
   </Layout>
   
      );
    
};
export default balancosPatrimoniais;