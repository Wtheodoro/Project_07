import styled from 'styled-components';

interface ContainerProps {
    color?: string
}

export const Container = styled.a<ContainerProps>`
    font-size: 1rem;
    line-height: 160%;
    color: #485D68;
    color: ${props => props.color};
    cursor: pointer;

    &:hover {
        color: #212353;
    }
`;
