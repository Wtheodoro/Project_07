import styled from 'styled-components';

interface ContainerProps {
    backgroundColor: string
}

export const Container = styled.div<ContainerProps>`

    display: flex;
    align-items: center;
    background: ${props => props.backgroundColor};
    border-radius: 50px;
    width: 500px;
    height: 360px;
    margin: 2rem;
    
    .content {        
        display: flex;
        flex-direction: column;

        p {
            display: flex;
            justify-content: center;
            text-align: start;
            padding: 0 2rem;
            width: 220px;
        }
    }
`;