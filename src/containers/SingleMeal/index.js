import React, { Component } from 'react';
import Loader from '../../components/Loader';
import './styles.css';

// const axios = require('axios');
// const ejs = require('ejs')

require('dotenv').config()

class SingleMeal extends Component {
    state = {
        meal: null,
        diets: [],
        ingredients: [],
        cuisines: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
        fetch(url)
        .then( response => response.json())
        .then ( json => (
           this.setState({ 
            meal: json,
            diets: json.diets.map(diet => diet),
            ingredients: json.extendedIngredients.map(ingredient => ingredient.name.toUpperCase()),
            cuisines: json.cuisines.map(cuisine => cuisine)
           }) 
        ))
    }

    render() {
        const { meal, diets, ingredients, cuisines } = this.state;
        const dietsList = diets.join(", ");
        const dietsLength = diets.length;
        const cuisinesList = cuisines.join("/");
        const cuisinesLength = cuisines.length;
        return (
            <div>
                {meal === null && <Loader />}
                {
                    meal !== null 
                    && 
                    <div className="mealDiv">
                        <h2>{meal.title.toUpperCase()}</h2>
                        <img src={meal.image} alt="Dish" />
                        <hr />
                        <div className="beforeMain">
                            { 
                                (cuisinesLength) ? <p><span>Great choice!</span> This is a delicious treat from the <span id="span-black">{cuisinesList}</span> cuisine.</p> : null
                            }
                            {
                                (dietsLength) ? <p>This yummy meal is the perfect fit for you if you follow any of the diets - <span id="span-black">{dietsList}</span> !!</p> : null
                            }
                        </div>
                        <div className="container">
                            <h3>INGREDIENTS</h3>
                            <div id="ingList">
                                For this recipe, you will need these ingredients:
                                <ul className="list-inline">
                                    {ingredients.map( (ingredient, index) => (
                                        <li key={index}> {ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <h3>INSTRUCTIONS</h3>
                            <p dangerouslySetInnerHTML={{__html: meal.instructions}} />
                            <p>This recipe should be ready in {meal.readyInMinutes} minutes, and it serves up to {meal.servings} people.</p>
                            <p><span>HEALTH SCORE</span> - {meal.healthScore}/100</p>
                            <p><span>OVERALL SCORE</span> - {meal.spoonacularScore}/100</p>
                        </div>
                        <hr />
                        <div className="container">
                            <h3>SUMMARY</h3>
                            <p dangerouslySetInnerHTML={{__html: meal.summary}} />
                        </div>
                    </div>
                } 
            </div>
        )
    }
}



export default SingleMeal;