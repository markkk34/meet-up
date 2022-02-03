import CardStyles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={CardStyles.card} draggable="true">{props.children}</div>
    )
}

export default Card;