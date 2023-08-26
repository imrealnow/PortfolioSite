import { FileType, ProjectHierarchy} from "../types/Project";

const libraryProjects: ProjectHierarchy = [
    {
        name: 'SharedVariables',
        files: [
            {
                type: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
        ],
    },
    {
        name: 'ProcessingGameFramework',
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