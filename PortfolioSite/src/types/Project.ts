// Represents a file type, which can be a README, EXECUTABLE, etc.
enum FileType {
    MARKDOWN = '.md',
    EXECUTABLE = '.exe', // You can expand this enum for different types of executables or files.
    IMAGE = '.png',
}

// Represents a file item in the project.
interface FileItem {
    type: FileType;
    name: string;
    content?: string;
}

// Represents a project folder which contains multiple files.
interface ProjectFolder {
    name: string; // Name of the project.
    files: FileItem[]; // Files associated with this project.
}

// Represents the entire project hierarchy.
type ProjectHierarchy = ProjectFolder[];

export { FileType };
export type { FileItem, ProjectFolder, ProjectHierarchy };
