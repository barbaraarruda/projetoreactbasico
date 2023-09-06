//importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

//componente
class Principal extends React.Component{

    //render
    render(){
        return(
            <div>
                <h1>Iniciando o projeto final</h1>
            </div>
        );
    }
}

//renderizar
ReactDOM.render(<Principal />, document.getElementById('root'));