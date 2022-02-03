import MeetupItem from "./MeetupItem";
import MeetupItemStyles from './MeetupItem.module.css';

const MeetupList = (props) => {
    return (
        <ul>
            {props.data.map((meetup) => 
                    <MeetupItem
                        id = {meetup.id}
                        image = {meetup.image}
                        description = {meetup.description}
                        title = {meetup.title}
                        address = {meetup.address}
                    />
            )}
        </ul>
    )
    
}

export default MeetupList;