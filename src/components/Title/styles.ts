import styled from 'styled-components';

interface ContainerProps {
    fontSize?: string
    width?: string
}

export const Container = styled.h1<ContainerProps>`
    font-size: ${props => props.fontSize};
    width: ${props => props.width};
    color: #212353;
    text-align: start;
`;
