import type {MyProjects} from "./MyProjects.ts"

interface Props {
    project: MyProjects;
}

export default function ProjectDetail({project}: Props) {
    return (
        <article className="project-detail">
            <h1>{project.name}</h1>
            <div className="tags-container">
                {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
            <p className="description">{project.description}</p>
            <div className="project-links">
            </div>
        </article>
    );
}