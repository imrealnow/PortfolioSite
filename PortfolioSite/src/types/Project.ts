// Represents a file type, which can be a README, EXECUTABLE, etc.
enum FileType {
    MARKDOWN = '.md',
    EXECUTABLE = '.exe', // You can expand this enum for different types of executables or files.
    IMAGE = '.png',
    VIDEO = '.mp4',
    LINK = '.link',
}

// Represents a file item in the project.
interface FileItem<T = any> {
    contentType: FileType;
    name: string;
    content: T;
    parentFolder?: ProjectFolder;
}

// Represents a project folder which contains multiple files.
interface ProjectFolder {
    name: string; // Name of the project.
    files: FileItem[]; // Files associated with this project.
    onClickNavigate?: string; // Optional navigation link.
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

class Folder implements ProjectFolder {
    public name: string;
    public files: FileItem[];
    constructor(name: string, ...files: FileItem[]) {
        this.name = name;
        this.files = files;
        for(const file of files) {
            file.parentFolder = this;
        }
    }
}

// Represents the entire project hierarchy.
type ProjectHierarchy = {
    projectFolders: ProjectFolder[];
    showReturnButton: boolean;
};

export { FileType, GameItem, Folder };
export type { FileItem, ProjectFolder, ProjectHierarchy };
