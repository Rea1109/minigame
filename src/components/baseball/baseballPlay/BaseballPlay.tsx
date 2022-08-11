import * as Styled from './BaseballPlay.style';
import { ComIcon, UserIcon } from '../../../assets/images';

type PlayInfo = {
    player: string;
    answer: string;
};

type BaseballPlayProps = {
    info?: PlayInfo[];
};

const BaseballPlay = ({ info }: BaseballPlayProps) => {
    return (
        <>
            <Styled.Answer>
                <img src={UserIcon} />
                <span>324</span>
            </Styled.Answer>
            <Styled.Answer isComputer={true}>
                <img src={ComIcon} />
                <span>1 Strike 1 Ball 1 Out</span>
            </Styled.Answer>
        </>
    );
};

export default BaseballPlay;
