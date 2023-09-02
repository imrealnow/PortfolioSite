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
                    content: './FileContent/SharedVariables/README.md',
                },
            ],
        },
        {
            name: 'Processing Game Framework',
            files: [
                {
                    contentType: FileType.MARKDOWN,
                    name: 'README',
                    content: './FileContent/ProcessingLibrary/README.md',
                },
            ],
        },
    ]
};

export default libraryProjects ;