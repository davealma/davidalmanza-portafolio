import {db} from '@/lib/db';
import {projects} from '@/lib/db/schema';
import {desc, eq} from 'drizzle-orm';
import ContentWrapper from '../ContentWrapper';
import { Typography, Chip } from '@mui/joy';
import { format, addMinutes } from 'date-fns';

const Projects = async ({searchParams}: { searchParams?: { [key: string]: string } }) => {
    let projectsData = [];
    if (searchParams?.industry) {
        projectsData = await db.select().from(projects).where(eq(projects.industry, searchParams.industry)).orderBy(desc(projects.startDate));
    }else{
        projectsData = await db.select().from(projects).orderBy(desc(projects.startDate));
    }
    
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
            { !!project.startDate && <DateDisplay startDate={project.startDate} endDate={project.endDate}/> }
            <article role='project-description'>{project.description}</article>
            <span>Techstack: { getArrayTechnologies().map((tech: string) => <Chip key={tech} color='primary' sx={{margin: '0 4px'}}>{tech}</Chip>) }</span>
        </div>
    );
}

const DateDisplay = ({startDate, endDate}: {startDate: Date, endDate: Date | null}) => {
    
    const formatDate = (date: Date) => {
        return format( addMinutes(date, date.getTimezoneOffset()), 'MMM/yyyy');
    }
    
    const initialDate = formatDate(startDate);
    const endingDate = endDate ? formatDate(endDate) : '';

    return(
        <Typography level='body-sm'>
            {initialDate} - {endingDate}
        </Typography>
    )
}

export default Projects;