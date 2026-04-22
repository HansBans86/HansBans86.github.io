export interface MyProjects {
    id: number;
    name: string;
    tags: string[];
    description: string;
}

export const projects: MyProjects[] = [
    {id: 1, name: "My Github Page", tags: ["React", "TS", "Vite"], description: "My page on Github"},
    {id: 2, name: "To be done", tags: ["TBD"], description: "Future project"},
];