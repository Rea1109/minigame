import styled from '@emotion/styled';

export const Answer = styled.div<{ isComputer?: boolean }>`
    display: flex;
    flex-flow: ${({ isComputer }) => (isComputer ? 'row-reverse' : 'row')};
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 10px;

    span {
        display: inline-block;
        padding: 3px 10px;
        margin: 0px 20px;

        border-radius: 5px;
        background-color: white;
        font-size: 18px;
        font-weight: bolder;
    }
`;
