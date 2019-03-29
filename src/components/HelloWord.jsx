/*

Componente de clase

import React,{Component} from 'react';

class HelloWorld extends Component {

    state ={
        active: true,
    }

    handleClick = () =>{
        this.setState({
            active: !this.state.active,
        });
    }

    render(){
        return(
            <>
                <button onClick={this.handleClick}>Ocultar</button>

                //Validación en react
                {this.state.active &&
                    <h1>Hola Mundo</h1>
                }                
            </>
        );
    }
};

export default HelloWorld
*/

/* Componente con hooks */

import React,{useState} from 'react';

const HelloWorld = () => {
    //Declaración de la variable de estado llamada active
    const[active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }
    return(
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>Hola Mundo con hooks</h1>            
            }            
        </div>
    );
};

export default HelloWorld;