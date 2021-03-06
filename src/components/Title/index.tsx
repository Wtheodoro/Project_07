import React from 'react';
import { Container } from './styles';

interface TitleProps {
  children: string
  fontSize: string
  width?: string
}

const Title = (props: TitleProps) => {
  return (
    <Container fontSize={props.fontSize} width={props.width}>
      {props.children}
    </Container>
  );
};

export default Title;
