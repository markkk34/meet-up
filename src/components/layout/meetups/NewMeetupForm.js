import Card from "../ui/Card";
import NewMeetupFormStyles from './NewMeetupForm.module.css';
import { useRef } from "react";

const NewMeetupForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event)
    {
        event.preventDefault();

        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const meetupData = {
            title       : title,
            image       : image,
            address     : address,
            description : description,
        };

        console.log(meetupData);
    }

    return (
        <Card>
            <form className={NewMeetupFormStyles.form} onSubmit={submitHandler}>
                <div className={NewMeetupFormStyles.control} key='title'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' className = {NewMeetupFormStyles.title} required id='title' ref={titleInputRef}></input>
                </div>
                <div className={NewMeetupFormStyles.control} key='image'>
                    <label htmlFor='image'>Image url</label>
                    <input type='url' required id='image' ref={imageInputRef}></input>
                </div>
                <div className={NewMeetupFormStyles.control} key='address'>
                    <label htmlFor='address'>Address</label>
                    <input type='address' required id='address' ref={addressInputRef}></input>
                </div>
                <div className={NewMeetupFormStyles.control} key='description'>
                    <label htmlFor='description'>Description</label>
                    <textarea className = {NewMeetupFormStyles.title} required rows = '5' id='description' ref={descriptionInputRef}/>
                </div>
                <div className={NewMeetupFormStyles.control}>
                    <button className='add'>Add Meet Up</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;