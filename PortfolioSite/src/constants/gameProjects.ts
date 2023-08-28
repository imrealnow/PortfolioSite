import { FileType, ProjectHierarchy} from "../types/Project";

const gameProjects: ProjectHierarchy = [
    {
        name: 'Zombies are People Too',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: './FileContent/ZombiesArePeopleToo/readme.md',
            },
            {
                type: FileType.EXECUTABLE,
                name: 'Play',
                content: '',
            },
        ],
    },
    {
        name: 'Echoes of Innocence',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
            {
                type: FileType.EXECUTABLE,
                name: 'Play',
                content: '',
            },
        ],
    },
    {
        name: 'Something Fishy',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
        ],
    },
    {
        name: 'Ball Tapper',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
        ],
    },
];

export default gameProjects;