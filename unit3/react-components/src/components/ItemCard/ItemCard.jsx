import './ItemCard.css';

const ItemCard = (props) => {
    console.log(props.name);
    return (
        <div className="item-card" name={props.name}>
            <li>Name: {props.name} </li>
            <li>Age: {props.age} years</li>
            <li>Occupation: {props.occupation} years</li>
        </div>
    )
}

export default ItemCard;