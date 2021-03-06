import styled from 'styled-components';

interface ContainerProps {
    fontSize?: string
    width?: string
}

export const Container = styled.p<ContainerProps>`
    font-size: ${props => props.fontSize};
    color: #485D68;
    width: ${props => props.width};
    text-align: start;
    line-height: 160%;
`;
