import {Component} from 'react'
import Ingredients from './Ingredients.jsx'

export default class IngredientList extends Component{
    render() {
        return(
            <div>
                IngredientList
                <Ingredients />
            </div>
        )
    }
}