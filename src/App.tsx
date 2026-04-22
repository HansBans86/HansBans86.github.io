import './App.css'
import Contact from '../src/components/Contact';
import ProjectCard from './components/ProjectCard.tsx';
import ProjectSidebar from './components/ProjectSidebar.tsx';
import Footer from "../src/components/Footer";
import {projects} from "./components/MyProjects.ts";
import {useState} from "react";


function App() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <div className="app-container">
            <section className="Contact">
                <Contact/>
            </section>
            <main className="main-content">
                <aside className="sidebar">
                    <ProjectSidebar
                        projects={projects}
                        onSelect={setSelectedProject}
                        selectedId={selectedProject.id}
                    />
                </aside>
                <section className="detail-panel">
                    <ProjectCard/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App
