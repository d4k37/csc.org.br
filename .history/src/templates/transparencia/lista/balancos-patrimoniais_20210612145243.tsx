import { Link } from 'gatsby'
import React from 'react'
import {testePDF} from "../../../../content/transparencia/teste.pdf"


interface ArquivoS{
    nome: string;
    ano: number;
    mes: string;
    arquivo: string;
    notas: string;
}
const balancosPatrimoniais =(arquivoS: ArquivoS)=>{
    arquivoS.nome = "teste";
    arquivoS.ano = 2021;
    arquivoS.mes = "janeiro";
    arquivoS.arquivo = "testeeee";
    arquivoS.notas = "descrição";
   

    
    return(
       arquivoS
    )
}

export default balancosPatrimoniais