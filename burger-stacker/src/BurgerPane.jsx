import {Component} from 'react'
import BurgerStack from './BurgerStack.jsx'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component {
    render() {
        return (
            <div>
                BurgerPane
                <BurgerStack />
                <br></br>
                BurgerPane
                <ClearBurger />
            </div>
        )
    }
}