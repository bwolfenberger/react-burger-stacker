import Ingredients from './Ingredients'
  
export default function BurgerStack (props) {
    let burgerIngredients = props.clickedIngredients.map((item) => (
        <li>
            <Ingredients ingredients={item.name} color={item.color} />
        </li>
    ))

    return (
        <ul>
            {burgerIngredients.reverse()}
        </ul>
    )
}
