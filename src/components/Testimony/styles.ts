import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #FFF;
    border-radius: 20px;
    width: 40.5rem;
    height: 20.5rem;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 20px 0px rgba(0, 0, 0, 0.2);
    margin: 0.6rem;
    padding: 1rem 3rem;
    border: 1px solid #9C69E2;

    img {
        height: 90px;
        border-radius: 50%;
        margin-bottom: 10rem;
    }

    .content {
        flex-direction: column;
        margin-left: 2rem;
    }
`;
