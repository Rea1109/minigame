import styled from '@emotion/styled';

export const Container = styled.main`
    width: 500px;
    height: 700px;
    margin: auto;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Header = styled.header`
    height: 70px;
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 570px;
    background-color: #85a4ba;
`;

export const GameButton = styled.button`
    img {
        width: 100px;
        height: 100px;
        object-fit: contain;

        transition: all 0.2s;
    }

    :hover {
        img {
            transform: scale(1.4);
        }
    }
`;

export const InputSection = styled.section`
    height: 60px;
`;
