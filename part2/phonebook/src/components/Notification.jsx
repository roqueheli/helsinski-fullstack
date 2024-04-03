import React from 'react'
import '../index.css'

const Notification = ({ message, setMessage, classProp }) => {
    setTimeout(() => {
        setMessage(null)
    }, 5000)

    return (message === null ? null : <div className={message?.toLowerCase().includes('deleted') ? 'error' : 'notification'}>{message}</div>)
}

export default Notification