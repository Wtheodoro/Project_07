import styled from 'styled-components';

interface ContainerProps {
    fontSize?: string
    width?: string
    color?: string
}

export const Container = styled.p<ContainerProps>`
    font-size: ${props => props.fontSize};
    color: #485D68;
    color: ${props => props.color};
    width: ${props => props.width};
    text-align: start;
    line-height: 160%;
`;
