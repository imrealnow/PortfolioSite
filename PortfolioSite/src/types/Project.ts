// Represents a file type, which can be a README, EXECUTABLE, etc.
enum FileType {
    MARKDOWN = '.md',
    EXECUTABLE = '.exe', // You can expand this enum for different types of executables or files.
    IMAGE = '.png',
}

// Represents a file item in the project.
interface FileItem<T = any> {
    contentType: FileType;
    name: string;
    content: T;
}

class GameItem implements FileItem<React.ReactNode> {
    public contentType: FileType;
    public name: string;
    public content: React.ReactNode;

    constructor(name: string, content: React.ReactNode) {
        this.contentType = FileType.EXECUTABLE;
        this.name = name;
        this.content = content;
    }
}

// Represents a project folder which contains multiple files.
interface ProjectFolder {
    name: string; // Name of the project.
    files: FileItem[]; // Files associated with this project.
    onClickNavigate?: string; // Optional navigation link.
}

// Represents the entire project hierarchy.
type ProjectHierarchy = {
    projectFolders: ProjectFolder[];
    showReturnButton: boolean;
};

export { FileType, GameItem };
export type { FileItem, ProjectFolder, ProjectHierarchy };
