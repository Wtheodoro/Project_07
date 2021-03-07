import React from 'react';

import { Container } from './styles';

const Logo = () => {
  return (
    <Container>
      <div className="first" data-testid="part-logo"/>
      <div className="second" data-testid="part-logo"/>
    </Container>
  );
};

export default Logo;
