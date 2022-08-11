import { ComIcon, UserIcon } from '../assets/images';

export const replaceIcon = (type: string): string => {
    if (type === 'user') return UserIcon;
    return ComIcon;
};
