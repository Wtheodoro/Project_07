import React, { ComponentType } from 'react';
import Button from '../Button';
import Paragraph from '../Paragraph';

import { Container } from './styles';

interface UnityProps {
  unityTitle: string
  children: string
  backgroundColor: string
  svg?: any
}

const Unity = (props: UnityProps) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      {props.svg}
      <div className="content">
        <Paragraph children={props.unityTitle} fontSize={'24px'}/>
        <Paragraph children={props.children} fontSize={'16px'} />
        <Button backgroundColor={'none'} icon={true}>Leanr more</Button>
      </div>
    </Container>
  );
};

export default Unity;
