import styled from 'styled-components';

export const Container = styled.div`
    width: 95vw;
    height: 90vh;
    margin: 2rem;
    background: #9C69E2;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 6rem;

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
        transition: all ease 0.1s;
    }

    svg {
        font-size: 30px;
        color: #FFF;
        margin-right: 2rem;
        margin-top: 2rem;
    }

    .bot {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2rem;

        .arrow {
        display: flex;
        justify-content: flex-end;
        }
    }
    
`;
