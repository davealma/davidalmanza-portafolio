import { render, screen } from '@testing-library/react';
import ContactForm from '../contact/ContactForm';

describe('Contact Form', () => {
    it('Should render full name input and label', async() => {
        render(<ContactForm />);
        const input = screen.getByPlaceholderText('How should I name you?');
        const label = screen.getByText("Full Name");
        expect(input).toBeInTheDocument();
        expect(label).toBeInTheDocument();
    });

    it('Should render Email Input and Label', () => {
        render(<ContactForm/>)
        const input = screen.queryByPlaceholderText('I want to contact you later');
        const label = screen.getByText("Email")
        expect(input).toBeInTheDocument();
        expect(label).toBeInTheDocument();
    });

    it("Should render Message Input and Label", async() => {
        render(<ContactForm/>)
        const input = screen.queryByPlaceholderText("Say more than Hi!");
        const label = screen.getByText("Message");
        expect(input).toBeInTheDocument();
        expect(label).toBeInTheDocument();
    });

});