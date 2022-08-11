import styled from '@emotion/styled';

export const Container = styled.main`
    min-width: 1200px;
    width: 100%;
    height: calc(100vh - 80px);
`;

export const Section = styled.section`
    width: 400px;
    height: 80%;
    margin: auto;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    overflow: hidden;
`;

export const GameDisplay = styled.div`
    width: 100%;
    height: 90%;
    padding: 20px 30px;
    background-color: #85a4ba;

    overflow: scroll;
`;

export const UserInput = styled.div`
    width: 100%;
    height: 10%;
`;

export const InputBox = styled.input`
    width: 80%;
    height: 100%;
    padding-left: 30px;
    border: none;
    outline: none;
`;

export const SendButton = styled.button`
    width: 20%;
    height: 100%;
    background-color: gold;
    color: white;
    font-size: 15px;
    font-weight: bolder;
`;
