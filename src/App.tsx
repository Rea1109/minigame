import * as Styled from './App.style';
import { BaseBallImage, EndTalkImage } from './assets/images';

function App() {
    return (
        <Styled.Container>
            <Styled.Header></Styled.Header>
            <Styled.Section>
                <Styled.GameButton>
                    <img src={BaseBallImage} alt="야구장 사진" />
                </Styled.GameButton>
                <Styled.GameButton>
                    <img src={EndTalkImage} alt="끝말잇기 사진" />
                </Styled.GameButton>
            </Styled.Section>
            <Styled.InputSection></Styled.InputSection>
        </Styled.Container>
    );
}

export default App;
