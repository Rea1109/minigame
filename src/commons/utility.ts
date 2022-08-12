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
    if (String(userInput).split('').includes('0')) {
        alert('숫자를 제대로 입력해주세요');
        return false;
    }

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

export const makeRandomNumber = (): number => {
    const numbers: string[] = [];
    let num = 0;

    while (numbers.length < 3) {
        num = Math.floor(Math.random() * 9) + 1;
        if (numbers.indexOf(String(num)) === -1) {
            numbers.push(String(num));
        }
    }
    return Number(numbers.join(''));
};

export const checkBaseBallNumber = (input: string, answer: string): string => {
    if (input === answer) return 'Home Run';

    let strike = 0;
    let ball = 0;
    let out = 0;

    const inputs = input.split('');
    const answers = answer.split('');

    inputs.forEach((el, index) => {
        if (answers.includes(el)) {
            index === answers.indexOf(el) ? strike++ : ball++;
        } else {
            out++;
        }
    });

    return `${strike} strike , ${ball} ball , ${out} out`;
};
