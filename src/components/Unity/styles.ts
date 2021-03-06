import styled from 'styled-components';

interface ContainerProps {
    backgroundColor: string
}

export const Container = styled.div<ContainerProps>`

    display: flex;
    background: ${props => props.backgroundColor};
    border-radius: 50px;
    
    .content {        


        p {
            display: flex;
            justify-content: center;
            text-align: start;
            padding: 0 2rem;
            width: 220px;
        }
    }
`;