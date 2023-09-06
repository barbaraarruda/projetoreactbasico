// Importar módulo
import React from 'react';

//Componente
class Formulario extends React.Component{

    //render
    render(){
        return(
            <form onSubmit={this.props.funcaoBotao} >
                <input type='text' placeholder='Informe o nome' className='form-control' name='nome' onChange={this.props.funcaoCampo}/>
                <input type='number' placeholder='Informe a idade' className='form-control' name='idade' onChange={this.props.funcaoCampo}/>
                <input type='submit' value='Cadastrar' className='btn btn-primary'/>
            </form>
        );
    }
}

//exportar componente
export default Formulario;