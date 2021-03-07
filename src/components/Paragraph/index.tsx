import React from 'react';

import { Container } from './styles';

export interface ParagraphProps {
  children: string
  fontSize?: string
  width?: string
  color?: string
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <Container fontSize={props.fontSize} width={props.width} color={props.color}>
      {props.children}
    </Container>
  );
};

export default Paragraph;
