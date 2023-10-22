"use client"
import Image from "next/image";
import { useThemeContext } from "@/providers";

const FooterImageItem = ({ provider }: {provider: string}): JSX.Element => {
    console.log('provier', provider)
    const { isDark } = useThemeContext();
    let imageComponent = null;

    const getAttribution = (author: string) => `Icon made by ${author} from www.flaticon.com`
    
    if (provider.includes('linkedin')) {
        const attribution = getAttribution(isDark ? 'Tahsin Tahil':'Ruslan Babkin')
        imageComponent = <Image title={attribution} alt={provider} src={isDark ? '/linkedin-dark.png' : '/linkedin.png'} width={50} height={50}/>;
    } else if(provider.includes('twitter')) {
        const attribution = getAttribution(isDark ?'Alfredo Creates':'Md Tanvirul Haque')
        imageComponent = <Image title={attribution} alt={provider} src={isDark ? '/twitter-dark.png' : '/twitter.png'} width={50} height={50} />
    }
    else {
        const attribution = getAttribution(isDark ?'Dave Gandy':'Roundicons')
        imageComponent = <Image title={attribution} src={isDark ? '/github-dark.png' : '/github.png'} width={50} height={50} alt="placeholder image" />;
    }

    return (
        <>
            {imageComponent}
        </>
    )

    
};

export default FooterImageItem;