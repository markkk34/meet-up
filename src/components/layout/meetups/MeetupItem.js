import Card from "../ui/Card";
import MeetupItemStyles from './MeetupItem.module.css';

const MeetupItem = (props) => {
    return (
        <li key={props.id} className={MeetupItemStyles['meetup-item']}>
            <Card>
                <div className={MeetupItemStyles.title}>
                    <h3>{props.title}</h3>
                </div>
                <img src={props.image} alt={props.title} />
                <div className={MeetupItemStyles.info}>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <button>To Favorites</button>
            </Card>
        </li>
    )
}

export default MeetupItem;