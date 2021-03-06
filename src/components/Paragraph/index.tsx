import React from 'react';

import { Container } from './styles';

interface ParagraphProps {
  children: string
  fontSize?: string
  width?: string
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <Container fontSize={props.fontSize} width={props.width}>
      {props.children}
    </Container>
  );
};

export default Paragraph;
