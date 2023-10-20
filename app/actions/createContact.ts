"use server"

import {db} from '@/lib/db';
import { contact } from '@/lib/db/schema';
import { z } from 'zod';

export async function createContact(prevState:any, formData: FormData) {
    console.log('fr', formData)

    const schema = z.object({
        email: z.string().email(),
        fullName: z.string().max(200),
        message: z.string().max(500),
    });

    const data = schema.parse({
        email: formData.get('email'),
        fullName: formData.get('full-name'),
        message: formData.get('message') 
    });

    try {
        await db.insert(contact).values(data);
        return { message: 'I received your message! I will contact you soon.'};
    }catch(e) {
        console.log('e',e);
        return { error: 'Failed sending the message! Try again later.'};
    }
}