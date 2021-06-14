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
     

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>



  
   </Layout>
   
      );
    
};
export default div;