import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

class App extends Component {
    // React 16 - can declare state without constructor function
    state = {
        recipes: []
    }
    // this keyword only works in class based components
    getRecipe = async (e) => {
        // e is event object of JavaScript
        const recipeName = e.target.elements.recipeName.value;
        // prevent default refresh
        e.preventDefault(); 
        // initialize an async await method 
        const api_call = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${recipeName}`);

        // grab data - set it to returned value of fetch
        // convert to json format
        const data = await api_call.json();
        this.setState({
            recipes: data.recipes
        });
        console.log(this.state.recipes);
    }

    componentDidMount = () => {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({ recipes });
    }

    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.state.recipes);
        // assign to local storage 
        // name of item, value of item 
        localStorage.setItem("recipes", recipes);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>
                </header>
                <Form getRecipe={ this.getRecipe } />
                <Recipes recipes={ this.state.recipes } />
            </div>
        )
    }
}

export default App;