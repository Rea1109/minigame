import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const route = useNavigate();
    const { pathname } = useLocation();
    return (
        <Container>
            <MainTitle onClick={() => route('/')}>{pathname === '/' ? 'Mini Game' : 'Go Back'}</MainTitle>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    min-width: 1200px;
    width: 100%;
    height: 80px;
    text-align: center;
`;

const MainTitle = styled.h1`
    display: inline-block;
    line-height: 80px;
    cursor: pointer;
`;
