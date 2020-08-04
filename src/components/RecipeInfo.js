import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeInfo extends Component {
    // state = {
    //     activeRecipe: []
    // }
    // componentDidMount = async () => {
    //     const title = this.props.location.state.recipe;
    //     // initialize an async await method 
    //     const request = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${title}`);

    //     const results = await request.json();
    //     console.log(results);
    // }

    render() {
        console.log(this.props);
        const activeRecipe = this.props.location.state.recipe;
        return (
            <div className="container"> 
                { this.props.location.state.recipe.length !== 0 &&
                    <div className="active-recipe">
                        <img
                            className="active-recipe__img"
                            src={ activeRecipe.image_url }
                            alt={ activeRecipe.title }
                        />
                        <h3 className="active-recipe__title">{ activeRecipe.title }</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{ activeRecipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website: 
                            <span>
                                <a href={activeRecipe.publisher_url}>{ activeRecipe.publisher_url }</a>
                            </span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        );
    }
}


export default RecipeInfo; 