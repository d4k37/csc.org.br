import React from "react"
import Layout from "../../components/layout"

import HeaderTwo from "../../components/header/header-two"
import StickyHeader from "../../components/header/sticky-header"

import Footer from "../../components/footer"


import PageHeader from "../../components/page-header";

import { Link } from "gatsby"
import Menu from "./menu"



  const balancosPatrimoniais = () =>{
    
      return(

   <Layout >
      <HeaderTwo/>
      <StickyHeader />
      <PageHeader title="Balanços Patrimoniais" crumbTitle="Balanços Patrimoniais" />
     <main className="container">
       <Menu/>
       <table>
           <tr>
               <th>Item 1</th>
               <th>Item 2</th>
               <th>Item 3</th>
               <th>Item 4</th>
           </tr>
           <tr>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
           </tr>
       </table>
        
     </main>
     
   <Footer/>
   
   </Layout>
   
      );
    
};
export default balancosPatrimoniais;