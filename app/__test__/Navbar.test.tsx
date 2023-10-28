import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavLinks from '../components/NavLinks';
import ToggleTheme from '../components/ToggleTheme';

const toggleThemeHandler = jest.fn();

describe('Navbar', () => {
    it('Should render nav Links', async () => {
        render(<NavLinks isDark={false}/>);

        const navLinks = screen.getByText(/Projects/i);
        expect(navLinks).toBeInTheDocument();
        const ContactLink = screen.getByText(/Contact/i);
        expect(ContactLink).toBeInTheDocument();
        
        const HomeLink = screen.getByText(/Home/i);
        expect(HomeLink).toBeInTheDocument();
    });

    it('Should render the toggle theme button', async() => {
        render(<ToggleTheme onThemeChange={toggleThemeHandler} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});

describe('Behaviour', () => {
    it('should toggle the theme', async() => {
        render(<ToggleTheme onThemeChange={toggleThemeHandler} />);

        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(toggleThemeHandler).toBeCalled();
    });
})