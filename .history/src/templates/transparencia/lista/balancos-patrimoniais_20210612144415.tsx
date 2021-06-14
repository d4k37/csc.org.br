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
    const nome = ArquivoS.nome = "teste";
    
   

    
    return(
       ArquivoS.nome
    )
}

export default balancosPatrimoniais