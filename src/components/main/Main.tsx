import { useNavigate } from 'react-router-dom';
import { BaseBallImage, EndTalkImage } from '../../assets/images';
import * as Styled from './Main.style';

const Main = () => {
    const route = useNavigate();

    return (
        <Styled.Container>
            <Styled.GameButton onClick={() => route('/baseball')}>
                <h1>숫자야구 하러가기</h1>
                <img src={BaseBallImage} alt="야구장 사진" />
            </Styled.GameButton>
            <Styled.GameButton onClick={() => alert('만드는중 ...')}>
                <h1>끝말잇기 하러가기</h1>
                <img src={EndTalkImage} alt="끝말잇기 사진" />
            </Styled.GameButton>
        </Styled.Container>
    );
};

export default Main;
