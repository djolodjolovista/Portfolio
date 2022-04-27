import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Contact.css';

const Contactscreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const contactFormHandler = (e) => {
        e.preventDefault();//sprječava reload/refresh browser-a
 
    }

  return (
    <div className='contact'>
        <div className="contactContainer1">

        </div>
        <div className="contactContainer2">
            <form className='contactContainerForm' onSubmit={contactFormHandler}>
                <Typography variant='h4'>Contact me</Typography>
                <input type="text" required placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type="email" required placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <textarea placeholder='Message' required cols="30" rows="10" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                <Button variant='contained' type='submit'>Send</Button>
            </form>
        </div>

    </div>
  )
}

export default Contactscreen