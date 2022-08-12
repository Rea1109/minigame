import * as Styled from './BaseballPlay.style';
import { PlayInfo } from '../../../commons/type';
import { replaceIcon } from '../../../commons/utility';

const BaseballPlay = ({ info }: { info: PlayInfo }) => {
    return (
        <Styled.Answer isComputer={info.player === 'com'}>
            <img src={replaceIcon(info.player)} />
            <span>{info.value}</span>
        </Styled.Answer>
    );
};

export default BaseballPlay;
