import React from 'react';
import Paragraph from '../../components/Paragraph';
import YoungLadyFloatingChart from '../../components/svgs/YoungLadyFloatingChart';
import Title from '../../components/Title';

import { Container } from './styles';

const second = () => {
  return (
    <Container>
      <div className="canvas">
        <YoungLadyFloatingChart />
        <div className="content">
          <Title fontSize={'40px'} width={'475px'}>We are a high-level data storage bank</Title>
          <Paragraph fontSize={'18px'} width={'474px'}>
            The place to store various data that you can access at any time through the internet and where you can carry it. This very flexbible storage area has a high level of security. To enter into your own data you must eneter the password that you created when you register in this Data Warehouse
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};

export default second;
