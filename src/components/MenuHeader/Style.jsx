import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: sans-serif;
    height: 20vh;
    background: #495057;

    & ul {
        list-style: none;
        text-align: center;
        margin: 1rem 0;
        display: flex;

        & li {
            padding: .5rem;
        }
    }

`;

export const Button = styled.button`
    cursor: pointer;
    background-color: #35ce8d;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    padding: .5rem;
    margin: 0 .2rem;
`;