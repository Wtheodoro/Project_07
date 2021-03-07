import React from 'react';
import { Container } from './styles';

export interface LinkProps {
  children: string
}

const Link = (props: LinkProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default Link;
