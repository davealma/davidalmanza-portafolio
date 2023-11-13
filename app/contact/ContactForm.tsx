'use client';
import { Input, Textarea, Typography } from '@mui/joy';
import React, { SyntheticEvent, useState } from 'react';
const ContactForm = () => {
    const [message, setMessage] = useState('');

    const invalidMessage = message.length > 500;

    const sxInavalid = invalidMessage ? {outline: '1px solid red'} : {};

    return(
        <>
            <div className="mb-4">
                <label htmlFor="full-name">Full Name</label>
                <Input name="full-name" id="full-name" placeholder="How should I name you?" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <Input name="email" type="email" id="email" placeholder="I want to contact you later" required />
            </div>
            <div className="mb-4">
                <label className={`${invalidMessage ? 'text-red-700' : ''}`} htmlFor="message">Message</label>
                <Textarea sx={sxInavalid} onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(evt.target.value) } value={message} id="message" size="lg" name="message" placeholder="Say more than Hi!" minRows="4" />
                <Typography color={`${invalidMessage ? 'danger' : 'neutral'}`} level='body-md'>{message.length}/500</Typography>
            </div>
        </>
    ); 
};

export default ContactForm;