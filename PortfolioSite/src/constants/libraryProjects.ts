import { FileType, ProjectHierarchy} from "../types/Project";

const libraryProjects: ProjectHierarchy = [
    {
        name: 'Shared Variables',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
        ],
    },
    {
        name: 'Processing Game Framework',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
        ],
    },
];

export default libraryProjects ;