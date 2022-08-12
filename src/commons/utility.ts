import { ComIcon, UserIcon } from '../assets/images';

export const replaceIcon = (type: string): string => {
    if (type === 'user') return UserIcon;
    return ComIcon;
};

export const checkNumber = (number: number): boolean => {
    const numList = new Set(number.toString().split(''));
    if (numList.size !== 3) return false;
    return true;
};

export const isValidationCheck = (userInput: number): boolean => {
    if (userInput < 100 || userInput > 999) {
        alert('숫자를 제대로 입력해주세요');
        return false;
    }
    if (!checkNumber(userInput)) {
        alert('숫자를 제대로 입력해주세요');
        return false;
    }
    return true;
};
