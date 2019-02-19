import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import CoolButton from './coolButton';
import ToggableMenu from './toggableMenu';
import { listItemsMap, randomizer2 } from './listItems';
import MovieCard from './movieCard';

class App extends Component {
  state = {
    movies: [
      {
        id: 1243,
        name: "El nombre de la rosa",
        year: 1986
      },
      
      {
        id: 124322,
        name: "2001 oddisey",
        year: 1969
      },
      {
        id: 124399,
        name: "Blade Runner",
        year: 1989
      }
    ]
  }

  addMovie = () => {
    let newState = {
      ...this.state
    }

    newState.movies.push({
      id: 1243999233,
      name: "Tarzan",
      year: 1931
    })

    this.setState(newState)
  }

  // maneja el cambio de estado, dejando todas las películas que no coinciden con el id de película pasado
  clickHandler = (movieIndex) => {
    let newState = {...this.state}

    newState.movies = newState.movies.filter((movie) => {
      return movie.id !== movieIndex
    })

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addMovie}>Add a movie</button>
        {
          //genera tantas moviecards como películas hay en el array
          //pasamos a cada moviecard una copia de clickHandler con el id preestablecido para cada película
          //esta función se ejecuta desde dentro de cada moviecard (hijo de app)
          //posibilitando que desde el hijo invoque a una función (clickHandler en este archivo)
          //desconociendo el estado del padre. El hijo invoca, pero no sabe nada del state del padre
          //tenemos que pasar la propiedad key para evitar un warning de react ya que cada elemento de lista
          //tiene que tener su propio key único (puedes usar las _ids de mongo si quieres)
          this.state.movies.map((movie, index) => 
            <MovieCard clickHandlerProp={() => this.clickHandler(movie.id)} key={movie.id} id={movie.id} name={movie.name} year={movie.year}></MovieCard>)
        }
        
        
        
        
        
        
        
        
        
        
        
        
        {/*        
        <p>My first item in the list is</p>
        <span>My random number is {randomizer2()}</span>
        <ul>{listItemsMap}</ul>

       

        <CoolButton />
        <ToggableMenu />
        <ToggableMenu /> */}
      </div>
    );
  }
}

export default App;
