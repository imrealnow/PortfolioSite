import { FileType, ProjectHierarchy} from "../types/Project";

const gameProjects: ProjectHierarchy = [
    {
        name: 'Zombies are People Too',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
            {
                type: FileType.EXECUTABLE,
                name: 'ZombiesArePeopleToo',
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
                name: 'EchoesOfInnocence',
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
            {
                type: FileType.EXECUTABLE,
                name: 'SomethingFishy',
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
            {
                type: FileType.EXECUTABLE,
                name: 'BallTapper',
            },
        ],
    },
];

export default gameProjects;