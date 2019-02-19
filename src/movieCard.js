import React, {Component} from "react";

//recuerda que moviecard es hijo de app, y que app está pasándole una función que se ejecutará
//cuando este hijo levante el evento click al clickar en su botón.
//este hijo solamente ejecuta la función que le ha mandado el padre sin saber
//ni que le ha mandado. él solo ejecuta, no sabe nada de lo que da el padre
//esta técnica de pasar de padres a hijos funciones manejadoras se llama lifting states
export default class MovieCard extends Component {
    render() {
        return (
            <ul>
                <li><button onClick={this.props.clickHandlerProp}>click me</button></li>
                <li>{this.props.name}</li>
                <li>Año {this.props.year}</li>
            </ul>
        )
    }
}
