import { Input, Textarea, Alert } from '@mui/joy';

const ContactForm = () => {
    return(
        <>
            <div className="mb-4">
                <label htmlFor="full-name">Full Name</label>
                <Input name="full-name" id="full-name" placeholder="How should I name you?"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <Input name="email" type="email" id="email" placeholder="I want to contact you later" />
            </div>
            <div className="mb-4">
                <label htmlFor="message">Message</label>
                <Textarea id="message" size="lg" name="message" placeholder="Say more than Hi!" minRows="4" />
            </div>
        </>
    ); 
};

export default ContactForm;