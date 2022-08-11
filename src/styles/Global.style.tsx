import { Global, css } from '@emotion/react';

const style = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
