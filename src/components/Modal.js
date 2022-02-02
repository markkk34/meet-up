import {useState} from 'react';

function Modal(props) {
    const onConfirm = () => {
        props.onConfirm(false)
    }

    const onCancel = () => {
        props.onCancel(false);
    }

    return (
        <div className='modal'>
            <button className='button decision-button' onClick={onConfirm}>Confirm</button>
            <button className='button decision-button' onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default Modal;