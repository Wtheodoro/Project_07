import React from 'react';
import { Container } from './styles';

interface LinkProps {
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
