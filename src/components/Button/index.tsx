import React from 'react';

class Botão extends React.Component{
    render(){
        const estaAtivo = false;
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }
        return(
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botão