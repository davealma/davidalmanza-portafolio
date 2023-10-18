'use client';
import { Museum, CarRental, MedicalInformation, RestaurantMenu, Business } from '@mui/icons-material';
import { ListItemDecorator, ListItemContent, ListItemButton } from '@mui/joy';
import { useThemeContext } from '@/providers';

const industryIcon = (industry: string) => {
    switch (industry) {
        case 'Ecommerce':
            return <Business/>
        case 'Health & Fitness':
            return <MedicalInformation />
        default:
            break;
    }
}

const ItemIndustry = ({industry}: {industry: IndustryProps}) => {
    const {isDark} = useThemeContext();

    return(
        <ListItemButton variant={isDark ? 'solid' : 'outlined'}>
            <ListItemDecorator> {industryIcon(industry.industry)} </ListItemDecorator>
            <ListItemContent>{industry.industry}</ListItemContent>
        </ListItemButton>
    );
}

export default ItemIndustry;