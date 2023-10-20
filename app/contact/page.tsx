import FormContentWrapper from "../components/FormContentWrapper";

const Contact = () => {
    async function create(formData:FormData) {
        'use server'
        console.log('formData', formData);
    }

    return(
        <FormContentWrapper />
    );
};
export default Contact;