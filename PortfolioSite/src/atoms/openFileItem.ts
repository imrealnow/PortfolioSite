import {atom} from 'recoil';
import { FileItem } from '../types/Project';

export const openFileItem = atom<FileItem | null>({
    key: 'openFileItem',
    default: null,
});