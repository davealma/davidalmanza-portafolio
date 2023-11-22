"use client"
import { useThemeContext } from "@/providers";
import ContentWrapper from "../ContentWrapper";
import { Button, Alert, Typography } from '@mui/joy';
// @ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import {ThumbUpAltOutlined, ThumbDownAltOutlined} from '@mui/icons-material';
import { createContact } from "@/app/actions/createContact";
import ContactForm from "./ContactForm";

const initialState = {
    message: null,
}
const FormContentWrapper = () => {
    const {isDark} = useThemeContext();
    const [state, formAction] = useFormState(createContact, initialState);

    const sxTextColor = {
        color: isDark ? 'white' : '#222222',
    }

    const sxMargin = {
        margin: '20px 0'
    };
    const variantAlert = isDark ? 'soft' : 'solid';
    return(
        <ContentWrapper>
            <div className="bg-[#B0BEC5] h-24 p-7">
                <Typography sx={sxTextColor} level="h3">Contact</Typography>
            </div>
            <div className={`${isDark ? 'bg-darker' : 'bg-white'} shadow-md p-7`}>
                {state.message ? <Alert sx={sxMargin} variant={variantAlert} color="success">{state.message} <ThumbUpAltOutlined/></Alert> : null}
                {state.error ? <Alert sx={sxMargin} variant={variantAlert} color="danger">{state.error} <ThumbDownAltOutlined/> </Alert> : null } 
                <form action={formAction}>
                    <ContactForm />
                    <SubmitButton />
                </form>
            </div>
        </ContentWrapper>
    )
};

const SubmitButton = () => {
    const { pending } = useFormStatus();
    
    return(
        <Button aria-disabled={pending} loading={pending} sx={{color: 'inherit'}} disabled={pending} variant="outlined" type="submit"> { pending ? 'loading' : 'Send' } </Button>
    )
}

export default FormContentWrapper;