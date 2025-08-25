import sample from '../assets/img/sample.webp'

export type Project = {
    id: number,
    title: string,
    image: string,
    link: string
}

// projects details
export const companyProject: Project[] = [
    {
        id: 1,
        title: "Regency Travel House",
        image: sample,
        link: "/technology/WebService",
    },
    {
        id: 2,
        title: "Ehelepola Walawwa",
        image: sample,
        link: "/technology/WebService",
    },
    {
        id: 3,
        title: "Aluviharaya Temple",
        image: sample,
        link: "/technology/WebService",
    },
    {
        id: 4,
        title: "Sample Brand",
        image: sample,
        link: "/technology/WebService",
    },
]