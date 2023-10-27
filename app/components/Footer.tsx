import FooterWrapper from "./FooterWrapper";
import FooterImageItem from "./FooterImage";

async function getSocialGitHub(): Promise<Socials[]> {
    const repoUrl = "https://api.github.com/user/social_accounts";
    const response = await fetch(repoUrl, {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_PAT}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json; charset=utf-8"
        },
    });

    return response.json();
}

const Footer = async () => {
    const socials = await getSocialGitHub();
    return(
        <FooterWrapper>
            <div className="flex justify-center items-center h-full">
                <ul className="flex justify-center align-middle content-stretch gap-7">
                    { socials.map((social: Socials, i: number) => <FooterItem key={i} social={social}/> ) }
                </ul>
            </div>
        </FooterWrapper>
    )
}

const FooterItem = ({ social }: {social: Socials}) => {
    return(
        <li key={social.provider}>
            <a href={social.url} target="_blank">
                <FooterImageItem provider={social.provider} />
            </a>
        </li>
    )
};

export default Footer;