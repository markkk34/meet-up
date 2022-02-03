import Card from "../ui/Card";

const MeetupItem = (props) => {
    return (
        <li key={props.id}>
            <Card>
                <h3>{props.title}</h3>
                <img src={props.image} alt={props.title} />
                <div>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <button>To Favorites</button>
            </Card>
        </li>
    )
}

export default MeetupItem;