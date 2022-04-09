import Card from "../ui/Card";
import NewMeetupFormStyles from './NewMeetupForm.module.css';

const NewMeetupForm = () => {

    function submitHandler(event)
    {
        event.preventDefault();
    }

    return (
        <Card>
            <form className={NewMeetupFormStyles.form} onSubmit={submitHandler}>
                <div className={NewMeetupFormStyles.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' className = {NewMeetupFormStyles.title} required id='title'></input>
                </div>
                <div className={NewMeetupFormStyles.control}>
                    <label htmlFor='image'>Image url</label>
                    <input type='url' required id='image'></input>
                </div>
                <div className={NewMeetupFormStyles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='address' required id='address'></input>
                </div>
                <div className={NewMeetupFormStyles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea className = {NewMeetupFormStyles.title} required rows = '5' id='description'/>
                </div>
                <div className={NewMeetupFormStyles.control}>
                    <button className='add'>Add Meet Up</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;