import { useState, KeyboardEvent, useRef } from 'react';
import { PlayInfo } from '../../commons/type';
import { checkBaseBallNumber, isValidationCheck, makeRandomNumber } from '../../commons/utility';
import * as Styled from './Baseball.style';
import BaseballPlay from './baseballPlay/BaseballPlay';

const Baseball = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [isStart, setIsStart] = useState(false);
    const [answerNumber, setAnswerNumber] = useState<number>();
    const [playInfo, setPlayInfo] = useState<PlayInfo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (isGameOver) {
            alert('게임이 끝났습니다.');
        }
        if (!isStart) return;
        if (event.key !== 'Enter') return;
        const target = event.target as HTMLInputElement;
        if (!isValidationCheck(Number(target.value))) return;
        setPlayInfo(pre => [...pre, { player: 'user', value: Number(target.value) }]);
        answerComputer(target.value);
    };

    const onClickSend = () => {
        if (isGameOver) {
            alert('게임이 끝났습니다.');
        }
        if (!isStart) return;
        if (!isValidationCheck(Number(inputRef.current?.value))) return;
        setPlayInfo(pre => [...pre, { player: 'user', value: Number(inputRef.current?.value) }]);
        answerComputer(inputRef.current?.value || '');
    };

    const gameStart = () => {
        setIsStart(true);
        setAnswerNumber(() => makeRandomNumber());
    };

    const reset = () => {
        setIsStart(false);
        setIsGameOver(false);
        setPlayInfo([]);
    };

    const gameOver = () => {
        alert('정답입니다!');
        setIsGameOver(true);
    };

    const answerComputer = (userInput: string) => {
        const result = checkBaseBallNumber(userInput, String(answerNumber));
        setPlayInfo(pre => [...pre, { player: 'com', value: result }]);
        console.log(`정답은 바로 => ${answerNumber}`);
        if (result === 'Home Run') {
            gameOver();
        }
    };

    return (
        <Styled.Container>
            <Styled.Section>
                <Styled.GameDisplay>
                    {playInfo.map((info: PlayInfo, index: number) => (
                        <BaseballPlay key={index} info={info} />
                    ))}
                </Styled.GameDisplay>
                <Styled.UserInput>
                    <Styled.InputBox
                        type="number"
                        placeholder="숫자를 입력해주세요."
                        onKeyUp={handleEnter}
                        ref={inputRef}
                        disabled={isGameOver}
                    />
                    <Styled.SendButton onClick={onClickSend} disabled={isGameOver}>
                        입력
                    </Styled.SendButton>
                </Styled.UserInput>
                {!isStart ? (
                    <Styled.GameStartButton onClick={gameStart}>START</Styled.GameStartButton>
                ) : (
                    <Styled.GameRestartButton onClick={reset}>RESTART</Styled.GameRestartButton>
                )}
            </Styled.Section>
        </Styled.Container>
    );
};

export default Baseball;
