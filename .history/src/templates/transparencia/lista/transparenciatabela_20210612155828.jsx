import React from "react"
import '../../../templates/transparencia/lista/transparencia.scss'
import testePDF from "../../content/transparencia/teste.pdf"
import {balancosPatrimoniais, ArquivoS} from "../templates/transparencia/lista/balancos-patrimoniais"


  const transparenciaTabela = (balancosPatrimoniais, ArquivoS) =>{
    
      return(
 <main>
     

   <tbody className="title">
  
      
       <div className="pesquisa">
           <p>Pesquisar</p>
           <input></input>
       </div>
       
       <table>
           <div className="listbox">
               <ul>
                   <li>Balanços Patrimoniais</li>
                   <li>Contas Bancárias</li>
                   <li>Contratos</li>
                   <li>Despesas</li>
                   <li>Editais</li>
                   <li>Estatuto e documentos Institucionais</li>
                   <li>Planilhas e Demonstrativos</li>
                   <li>Receitas</li>
                   <li>Recursos Humanos</li>
                   <li>Relatórios e Certificações</li>
                   <li>Serviços Prestados</li>
               </ul>
           </div>
        <tr className="linha">
            <td>Nome</td>
            <td>ano</td>
            <td>mês</td>
            <td>arquivo</td>
            <td>notas</td>
        </tr>
        <tr className="linha0">
            <td>{toString(ArquivoS.nome)}</td>
            <td>{toString(balancosPatrimoniais.ano)}</td>
            <td>{toString(balancosPatrimoniais.mes)}</td>
            <td><a href={testePDF}>Baixe</a></td>
            <td>{toString(balancosPatrimoniais.notas)}</td>
        </tr>
        <tr className="linha0">
            <td>quarto arquivo</td>
            <td>2021</td>
            <td>junho</td>
            <td>visualizar</td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        <tr className="linha0">
            <td>quinto arquivo</td>
            <td>2019</td>
            <td>junho</td>
            <td>visualizar</td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        <tr className="linha0">
            <td>segundo arquivo</td>
            <td>2018</td>
            <td>agosto</td>
            <td>visualizar</td>
            <td>descrição do primeiro arquivo</td>
        </tr>
        </table>
      
        <div className="changeView">
            <button>Anterior</button>
            <p>1</p>
            <button>Próximo</button>
        </div>
   </tbody>
     
 </main>


   
      );
    
};
export default transparenciaTabela;