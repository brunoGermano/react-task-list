// import {React} from "react"; 

/* O nome "React" dentro de "{}" significa fazer uma importação nomeada. Portant, no local do arquivo deve ter sido realizada uma exportação nomeada também, do contrário dará um erro assim:

Uncaught TypeError: Cannot read properties of undefined (reading 'Component')
    at TestByClass.jsx:7:33

Isso mostra que no pacote "react" de onde se faz a importação, a exportação foi por defaulf e não nomeada.
Portanto, use a importação defaulf como segue na linha abaixo!

*/

import React from "react";

class TestByClass extends React.Component{

    // Pra usar um states na classe igual no Hook, você precisa chamar o constructor

    constructor(props){
        super(props);
        this.state = {
            message: "Hello world from Bruno!"
        }
    }

    /* Na classe não consigo usar hooks, logo não consigo usar o "useEffect". Para subistituir esse hook usá-se o método do lifeCycle da classe que segue abaixo: */
    componentDidMount(){
        // O que vier aqui dentro será executado quando o usuário acessa a aplicação pela primeira vez!
    }

    render(){
        return(
            <h1 className="text-3xl text-green-500 font-bold ">{this.state.message} </h1>
        );
    }
}

export { TestByClass }