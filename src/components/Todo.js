import {useState} from 'react';
import Modal from './Modal';
import Backblock from './Backblock';

function Todo(props) {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const onDelete = (isOpened = true) => {
        setIsModalOpened(isOpened);
    }

    const onCloseModal= () => {
        setIsModalOpened(false);
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
        {isModalOpened ? <Modal onConfirm = {onCloseModal} onCancel = {onCloseModal} /> : null}
        {isModalOpened ? <Backblock onCancel = {onCloseModal} /> : null}
      </div>
    );
}

export default Todo;