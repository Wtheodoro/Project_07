import React from 'react';
import Paragraph from '../Paragraph';

import { Container } from './styles';

const Testimony = () => {
  return (
    <Container>
      <img src="https://github.com/wtheodoro.png" alt="Foto" data-testid="img"/>
      <div className="content">
        <Paragraph fontSize={'18px'}>Walison Teodoro</Paragraph>
        <Paragraph fontSize={'14px'}>Front-end Developer</Paragraph>
        <Paragraph fontSize={'18px'} width={'385px'}>
          Veni, vidi, vici. Carpe diem. Ex ore parvulorum veritas. Alis volat propriis. Exceptio regulam probat. Memento vivere. Amor vincit omnia. In vino veritas
        </Paragraph>
      </div>
    </Container>
  );
};

export default Testimony;
