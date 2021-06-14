import { Link } from 'gatsby'
import React from 'react'

interface ArquivoS{
    nome: string;
    ano: number;
    mes: string;
    arquivo: string;
    notas: string;
}
const balancosPatrimoniais =(ArquivoS)=>{
    ArquivoS.nome = "teste";
    
   

    
    return(
       ArquivoS
    )
}

export default balancosPatrimoniais