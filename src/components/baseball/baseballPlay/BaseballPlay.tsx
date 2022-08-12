import * as Styled from './BaseballPlay.style';
import { PlayInfo } from '../../../commons/type';
import { replaceIcon } from '../../../commons/utility';
import { useEffect, useRef } from 'react';

const BaseballPlay = ({ info }: { info: PlayInfo }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <Styled.Answer isComputer={info.player === 'com'} ref={scrollRef}>
            <img src={replaceIcon(info.player)} />
            <span>{info.value}</span>
        </Styled.Answer>
    );
};

export default BaseballPlay;
