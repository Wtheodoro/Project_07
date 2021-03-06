import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(180deg, #F6F4FD 10%, #FFF 19.4%);
    padding: 2rem 6rem 0;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .content-text {
            margin-top: 3rem;
            z-index: 10;

            h1 {
                margin-bottom: 4rem;
                margin-top: -2rem;
            }

            p {
                margin-bottom: 4rem;
            }
        }
        
        svg {
            margin-top: 10rem;
            width: 50rem;
            margin-left: -10rem;        
        }
        
    }
`;
