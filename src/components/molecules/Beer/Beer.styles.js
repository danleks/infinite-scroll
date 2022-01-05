import styled from "styled-components";

export const BeerWrapper = styled.div`
    position: relative;
    height: 400px;
    border: 10px solid black;
    padding: 30px;

    img {
        height: 90%;
        width: auto;
        object-fit: contain;
    }

    div {
        position: absolute;
        bottom: 10%;
        left: 0;
        width: 100%;
        padding-right: 30px;
        background-color: #ffd121;
        font-weight: bold;
        text-align: right;
        z-index: -1;

        span {
            display: block;
            line-height: 2;
        }
    }
`;