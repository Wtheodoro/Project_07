import React from 'react';
import Paragraph from '../Paragraph';

import { Container } from './styles';

const Testimony = () => {
  return (
    <Container>
      <img src="https://github.com/wtheodoro.png" alt="Foto"/>
      <div className="content">
        <Paragraph children={'Walison Teodoro'} fontSize={'18px'} />
        <Paragraph children={'Front-end Developer'} fontSize={'14px'} />
        <Paragraph 
        children={'Veni, vidi, vici. Carpe diem. Ex ore parvulorum veritas. Alis volat propriis. Exceptio regulam probat. Memento vivere. Amor vincit omnia. In vino veritas'} 
        fontSize={'18px'} width={'385px'}/>
      </div>
    </Container>
  );
};

export default Testimony;
