import { Link } from "react-router-dom";

const ProjectCard = ({title, content, link}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            {link && <Link to={link}>View Project</Link>}
        </div>
    )
}

export default ProjectCard;