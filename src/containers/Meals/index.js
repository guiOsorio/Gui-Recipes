import React, { Component } from 'react';
import MealList from '../../components/MealItems';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
import Rand from '../../components/Random/rand';
import './styles.css';

require('dotenv').config()

class Meals extends Component {
    state = {
        meals: [],
        mealName: "",
        isFetching: false
      }
    
    onMealInputChange = e => {
      this.setState({ mealName: e.target.value, isFetching: true })
      fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${e.target.value}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((json) => this.setState({ meals: json.results, isFetching: false }))
    }

    render() {
        const { meals, mealName, isFetching } = this.state;
        return (
          <div className="mainContainer">
            <Rand />
            <div className="mealsContainer">
              <Intro message="WELCOME! HERE YOU CAN FIND ALL THE RECIPES YOU NEED!" />
              <input value={mealName} type="text" onChange={this.onMealInputChange} />
              {
                !isFetching && meals.length === 0 && mealName.trim() === ""
                && <h4>TYPE THE MEAL NAME YOU WISH TO LOOK FOR</h4>
              }
              {
                isFetching && <Loader />
              }
              {
                !isFetching && meals.length === 0 && mealName.trim() !== ""
                && <h4>SORRY, THE MEAL YOU LOOKED FOR COULD NOT BE FOUND</h4>
              }
              {
                !isFetching && <MealList list={this.state.meals} />
              }
            </div>
          </div>
        )
    }
    
}

export default Meals;