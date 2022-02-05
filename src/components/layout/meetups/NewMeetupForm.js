import Card from "../ui/Card";
import NewMeetupFormStyles from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
    return (
        <Card>
            <form className={NewMeetupFormStyles.form}>
                <div className={NewMeetupFormStyles.control}>
                    <label htmlFor='title'></label>
                    <input type='text' required id='title'></input>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;