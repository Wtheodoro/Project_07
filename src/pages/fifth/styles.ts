import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    border-top: 2px solid #9C69E2;
    display: flex;
    justify-content: space-around;

    .left {
        display: flex; 
        flex-direction: column;
        justify-content: space-evenly;

        .left-bottom {

            .logo {
                display: flex;
                align-items: center;
            }
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .right-top {
            display: flex; 
            justify-content: flex-end;

            & > button {
                margin-right: 1rem;
            }
        }

        .right-bottom {
            display: flex;
            text-align: start;
            justify-content: space-around;
            width: 44rem;

            .group {
                display: flex;
                flex-direction: column;
            }

            .logos {
                display: flex;

                svg {
                    font-size: 4rem;
                }
            }
        }
    }
`;
