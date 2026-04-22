import type {MyProjects} from '../components/MyProjects.ts';

interface Props {
    projects: MyProjects[];
    onSelect: (project: MyProjects) => void;
    selectedId: number; // To highlight the active one
}

export default function ProjectCard({projects, onSelect, selectedId}: Props) {
    return (
        <ul className="sidebar-list">
            {projects.map((p) => (
                <ul
                    key={p.id}
                    className={`sidebar-item ${selectedId === p.id ? 'active' : ''}`}
                    onClick={() => onSelect(p)}
                >
                    <h3>{p.name}</h3>
                    <div className="tags">
                        {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                </ul>
            ))}
        </ul>
    );
}