import { FileType, ProjectHierarchy} from "../types/Project";

const libraryProjects: ProjectHierarchy = {
    showReturnButton: true,
    projectFolders:[
        {
            name: 'Shared Variables',
            files: [
                {
                    contentType: FileType.MARKDOWN,
                    name: 'README',
                    content: '',
                },
            ],
        },
        {
            name: 'Processing Game Framework',
            files: [
                {
                    contentType: FileType.MARKDOWN,
                    name: 'README',
                    content: '',
                },
            ],
        },
    ]
};

export default libraryProjects ;