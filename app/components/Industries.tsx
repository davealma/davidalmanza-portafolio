'use client';
import { List, ListItem, ListItemDecorator, ListItemContent, ListItemButton } from '@mui/joy';
import { Museum, CarRental, MedicalInformation, RestaurantMenu, Business } from '@mui/icons-material';
import { useThemeContext } from '@/providers';

const Industries = () => {
    const {isDark} = useThemeContext();

    return (
        <List component="ul">
        <ListItemButton variant={isDark ? 'solid' : 'outlined'}>
            <ListItemDecorator> <Museum/> </ListItemDecorator>
            <ListItemContent>Museum</ListItemContent>
        </ListItemButton>

            <ListItemButton variant={isDark ? 'solid' : 'outlined'}>
            <ListItemDecorator> <CarRental/> </ListItemDecorator>
            <ListItemContent>Vehicle Dealership</ListItemContent>
            </ListItemButton>
            
            <ListItemButton variant={isDark ? 'solid' : 'outlined'}>
            <ListItemDecorator> <MedicalInformation/> </ListItemDecorator>
            <ListItemContent>Health</ListItemContent>
            </ListItemButton>
            
            <ListItemButton variant={isDark ? 'solid' : 'outlined'}>
            <ListItemDecorator> <RestaurantMenu/> </ListItemDecorator>
            <ListItemContent>Restaurant</ListItemContent>
            </ListItemButton>
            
            <ListItemButton variant={isDark ? 'solid' : 'outlined'}>
            <ListItemDecorator> <Business/> </ListItemDecorator>
            <ListItemContent>Enterprise</ListItemContent>
            </ListItemButton>
        </List>
    )
}

export default Industries;