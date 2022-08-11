import * as Styled from './Baseball.style';
import BaseballPlay from './baseballPlay/BaseballPlay';

const Baseball = () => {
    return (
        <Styled.Container>
            <Styled.Section>
                <Styled.GameDisplay>
                    <BaseballPlay />
                </Styled.GameDisplay>
                <Styled.UserInput>
                    <Styled.InputBox type="number" />
                    <Styled.SendButton>입력</Styled.SendButton>
                </Styled.UserInput>
            </Styled.Section>
        </Styled.Container>
    );
};

export default Baseball;
