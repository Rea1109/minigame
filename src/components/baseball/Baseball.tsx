import { useState, KeyboardEvent, useRef } from 'react';
import { PlayInfo } from '../../commons/type';
import { isValidationCheck } from '../../commons/utility';
import * as Styled from './Baseball.style';
import BaseballPlay from './baseballPlay/BaseballPlay';

const Baseball = () => {
    const [playInfo, setPlayInfo] = useState<PlayInfo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        const target = event.target as HTMLInputElement;
        if (!isValidationCheck(Number(target.value))) return;
        setPlayInfo(pre => [...pre, { player: 'user', value: Number(target.value) }]);
    };

    const onClickSend = () => {
        if (!isValidationCheck(Number(inputRef.current?.value))) return;
        setPlayInfo(pre => [...pre, { player: 'user', value: Number(inputRef.current?.value) }]);
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
                    />
                    <Styled.SendButton onClick={onClickSend}>입력</Styled.SendButton>
                </Styled.UserInput>
            </Styled.Section>
        </Styled.Container>
    );
};

export default Baseball;
