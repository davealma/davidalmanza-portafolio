import {db} from '@/lib/db';
import {projects} from '@/lib/db/schema';
import ContentWrapper from '../ContentWrapper';
import { Typography, Chip } from '@mui/joy';

const Projects = async () => {
    const projectsData = await db.select().from(projects);
    console.log(projectsData);
    return(
        <>
            <ContentWrapper>
                { projectsData.map(project => <ProjectItem key={project.id} project={project} />) }
            </ContentWrapper>
        </>
    );
};

const ProjectItem = ({project}:{project: ProjectProps}) => {
    const getArrayTechnologies = (): Array<string> => {
        return project.technologies.split(',');
    };
    return(
        <div className='mb-2'>
            <Typography level='h1' color='primary'>{project.position}</Typography>
            <Typography level="h4" color="primary">{project.projectName} - {project.company}</Typography>
            <article>{project.description}</article>
            <span>Techstack: { getArrayTechnologies().map((tech: string) => <Chip key={tech} color='primary' sx={{margin: '0 4px'}}>{tech}</Chip>) }</span>
        </div>
    );
}

export default Projects;