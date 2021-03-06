import styled from 'styled-components';

interface ContainerProps {
    backgroundColor?: string;
    textColor?: string
    shadow?: string;
}

export const Container = styled.button<ContainerProps>`
    background: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    box-shadow: ${props => props.shadow};
    display: flex;
    justify-content: center; 
    font-size: 16px;
    cursor: pointer;

    svg {
        font-size: 18px;
        margin-left: 0.4rem;
    }
`;
