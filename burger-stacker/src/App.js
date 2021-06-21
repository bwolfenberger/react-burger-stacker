import {Component} from 'react'
import IngredientList from './IngredientList.jsx'
import BurgerPane from './BurgerPane.jsx'

export default class App extends Component {
  render() {
    return(
      <div>
        App
        <IngredientList />
        <br></br>
        App
        <BurgerPane />
      </div>
    )
  }
}
