import React from 'react';
import { Container } from './styles';
import { GrLinkNext } from 'react-icons/gr'

interface BtnProps {
  children: string
  backgroundColor: string
  textColor?: string
  icon?: boolean
  shadow?: boolean
}

const Button = (props: BtnProps) => {

  const shadow = props.shadow ? '0 5px 5px rgba(75, 93, 104, 0.1)' : 'none'

  return (
    <Container backgroundColor={props.backgroundColor} textColor={props.textColor} shadow={shadow}>
      {props.children}
      {
        props.icon && <GrLinkNext/>
      }
    </Container>
  );
};

export default Button;
