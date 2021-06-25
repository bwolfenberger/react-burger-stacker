export default function Ingredients(props) {
    return (
        <p style={{backgroundColor: props.color}}>
            {props.ingredients}
        </p>
    )
}