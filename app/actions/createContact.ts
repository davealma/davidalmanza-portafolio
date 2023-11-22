"use server"

import {db} from '@/lib/db';
import { contact } from '@/lib/db/schema';
import { z } from 'zod';

export async function createContact(prevState:any, formData: FormData) {
    const schema = z.object({
        email: z.string({required_error: "Email is required"}).email({message: "Email is invalid."}),
        fullName: z.string().max(200, {message: "Name is too long."}),
        message: z.string().max(500, {message: "Message is too long."}),
    });

    const fullName = formData.get('full-name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
        const data = schema.parse({
            email,
            fullName,
            message
        });

        await db.insert(contact).values(data);
       
        await fetch(process.env.EMAIL_LABMDA_URL, {
            method: 'POST',
            body: JSON.stringify({
                name: fullName,
                message,
                sender: email
            })
        });
        
        return { message: 'I received your message! I will contact you soon.'};
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {error: error.issues[0].message} 
        }else {
            return { error: 'Failed sending the message! Try again later.'};
        }
    }
}