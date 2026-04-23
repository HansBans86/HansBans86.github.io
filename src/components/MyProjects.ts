export interface MyProjects {
    id: number;
    name: string;
    tags: string[];
    description: string;
    link: string;
}

export const projects: MyProjects[] = [
    {
        id: 1, name: "My Github Page", tags: ["React", "TypeScript", "Vite"],
        description: "My page on Github",
        link: "https://github.com/HansBans86/HansBans86.github.io"
    },
    {
        id: 2, name: "To be done", tags: ["TBD"],
        description: "Future project",
        link: ""
    },
    {
        id: 3, name: "To be done", tags: ["TBD"],
        description: "Future project",
        link: ""
    },
    {
        id: 4, name: "To be done", tags: ["TBD"],
        description: "Future project",
        link: ""
    },
];