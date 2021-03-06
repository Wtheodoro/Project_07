import React from 'react';
import Button from '../Button';
import Link from '../Link';
import Logo from '../Logo';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <div className="links">
        <Link children={'About'}/>
        <Link children={'Help'}/>
        <Link children={'Features'}/>
        <Link children={'Signup'}/>
      </div>
      <Button backgroundColor={'#FFF'} textColor={'#212353'} 
      icon={true} shadow={true}>Request Demo</Button>
    </Container>
  );
};

export default Header;
