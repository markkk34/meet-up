import MeetupItem from "./MeetupItem";
import MeetupListStyles from './MeetupList.module.css';

const MeetupList = (props) => {
    return (
        <ul className={MeetupListStyles['meetup-list']}>
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