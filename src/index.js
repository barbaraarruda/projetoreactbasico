//importar módulos
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

//importar o formulário
import Formulario from './Formulario';

//importar a tabela
import Tabela from './Tabela';

//componente
class Principal extends React.Component{

    //construtor
    constructor(props){
        super(props);

        this.state ={
            nome : '',
            idade: null,
            vetor : []
        }
    }

    //função ao digitar (onChange)
    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }

    //função ao enviar (onSubmit)
    aoClicar = (botao) => {
        botao.preventDefault();

        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({'nome' : this.state.nome, 'idade' : this.state.idade});

        this.setState({vetor : copiaVetor});
    }

    //render
    render(){
        return(
            <div>
                <Formulario funcaoBotao ={this.aoClicar} funcaoCampo={this.aoDigitar}/>
                <Tabela dados={this.state.vetor}/>
            </div>
        );
    }
}

//renderizar
ReactDOM.render(<Principal />, document.getElementById('root'));