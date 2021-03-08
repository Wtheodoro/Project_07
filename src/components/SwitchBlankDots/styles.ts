import styled from 'styled-components';

export interface SwitchBlankDotsType {
    dotPosition?: number
  }

export const Container = styled.div<SwitchBlankDotsType>`
    display: flex;

    div {
        background: #FFF;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 1.5px;

        &:nth-child(${props => props.dotPosition}) {
            background: #F063B8;
        }
    }
`;
