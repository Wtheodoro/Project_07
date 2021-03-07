import styled from 'styled-components';

export const Container = styled.div`
    width: 95vw;
    height: 90vh;
    margin: 2rem;
    background: #9C69E2;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    
    h1 {
        color: #FFF;
        margin-left: 5.5rem;
        margin-top: 5.5rem;
    }

    p {
        margin: 0.2rem;

        &:nth-child(3) {
            margin-top: 2rem;
        }
    }

    .content {
        display: flex;
        margin-left: 5.5rem;

    }

    svg {
        font-size: 30px;
        color: #FFF;
        margin-right: 2rem;
        margin-top: 2rem;
    }

    .arrow {
        display: flex;
        justify-content: flex-end;
    }
`;
