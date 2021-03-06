import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import MulheresTech from '../../components/svgs/MulheresTech'
import { Container } from './styles';

const first = () => {
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="content-text">
          <Title fontSize={'80px'} width={'645px'}
          children={'Save your data storage here.'}
          />

          <Paragraph fontSize={'18px'} width={'380px'}
          children={"Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others"}
          />

          <Button backgroundColor={'#9C69E2'} textColor={'#FFF'}>Learn more</Button>
        </div>
        <MulheresTech />
      </div>
    </Container>
  );
};

export default first;
