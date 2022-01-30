import {useState} from 'react';
import Modal from './Modal';
import Backblock from './Backblock';

function Todo(props) {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const onDelete = (isOpened = true) => {
        setIsModalOpened(isOpened);
    }

    return (
        <div className="card">
        <h2>TITLE</h2>
        <div className="description">
            <p>{props.text}</p>
          <button 
            className="button delete-button" 
            onClick={onDelete}
          >Delete</button>
        </div>
        {isModalOpened ? <Modal onChange = {onDelete} /> : null}
        {isModalOpened ? <Backblock /> : null}
      </div>
    );
}

export default Todo;