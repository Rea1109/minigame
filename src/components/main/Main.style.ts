import styled from '@emotion/styled';

export const Container = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 1200px;
    width: 100vw;
    height: calc(100vh - 80px);
    margin: auto;
    background-color: #85a4ba;
`;

export const GameButton = styled.button`
    h1 {
        margin-bottom: 50px;
        color: white;
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: contain;

        transition: all 0.2s;
    }

    :hover {
        img {
            transform: scale(1.4);
        }
    }
`;
