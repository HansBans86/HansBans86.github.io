import './App.css'
import Contact from '../src/components/Contact.tsx';
import ProjectDetail from './components/ProjectDetail.tsx';
import ProjectSidebar from './components/ProjectSidebar.tsx';
import Footer from "../src/components/Footer.tsx";
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
                    <div key={selectedProject.id} className="fade-in-content">
                        <ProjectDetail project={selectedProject}/>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App
