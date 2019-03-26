import React from 'react'
import './style.css'

const DeleteBtn = props => {
    return (
        <span className='del-btn' {...props} role='button' tabIndex='0'>
            DELETE
        </span>
    )
}

export default DeleteBtn