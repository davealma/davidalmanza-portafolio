import { List } from '@mui/joy';
import ItemIndustry from './IndustryItem';
const Industries = ({industries}: {industries: IndustryProps[]}) => {
    return (
        <List component="ul">
            { industries.map((industry, i) => <ItemIndustry key={i} industry={industry} />) }
        </List>
    )
}

export default Industries;