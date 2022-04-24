import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";
import API from "../config.json";

const NewMeetup = () => {

    function addMeetupHandler(meetupData)
    {
        const urlAPI = API.MEETUP_API + 'meetups.json';
        fetch(
            urlAPI, 
            {
                method : 'POST',
                body : JSON.stringify(meetupData),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        );
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetup;