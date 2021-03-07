import React from 'react';
import Testimony from '../../components/Testimony';
import Title from '../../components/Title';

import { Container } from './styles';

const fourth = () => {
  return (
    <Container>
      <Title children={'Testimonials'} fontSize={'40px'} />
      <div className="content">
        <Testimony />
        <Testimony /> 
        <Testimony /> 
        <Testimony /> 
      </div>
    </Container>
  );
};

export default fourth;
