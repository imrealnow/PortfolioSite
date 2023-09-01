import { FileType, ProjectHierarchy } from "../types/Project";
const webAppProjects: ProjectHierarchy = {
    showReturnButton: true,
    projectFolders: [
    {
        name: 'Portfolio Site',
        files: [
            {
                contentType: FileType.MARKDOWN,
                name: 'README',
                content: '',
            },
        ],
    },
    {
        name: 'FableFusion',
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

export default webAppProjects ;