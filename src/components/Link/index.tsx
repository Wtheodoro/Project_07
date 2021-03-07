import React from 'react';
import { Container } from './styles';

export interface LinkProps {
  children?: string
  color?: string
}

const Link = (props: LinkProps) => {
  return (
    <Container color={props.color}>
      {props.children}
    </Container>
  );
};

export default Link;
