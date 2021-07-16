import React from 'react';
import '../MealItems/styles.css';
import { Link } from 'react-router-dom';

const MealListItem = ({ meal }) => (
    <li>
        <Link to={`/meals/${meal.id}`}>
            {meal.title}
        </Link>
    </li>
)

const MealList = (props) => {
        return (
            <div>
                <ul className="meals-list">
                    {props.list.map(meal => (
                        <MealListItem meal={ meal } key={meal.id}/>
                    ))}
                </ul>
            </div>
        )
    }

export default MealList;