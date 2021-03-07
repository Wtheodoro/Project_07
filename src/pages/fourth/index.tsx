import React, { useEffect } from 'react';
import Testimony from '../../components/Testimony';
import Title from '../../components/Title';
import { apiUser } from '../../services/api';

import { Container } from './styles';

const Fourth = () => {

  const allGitHubNickName = ['virginia-silva', 'bm-santos', 'patriciahoc', 'mairylandmelo', 'danielfranchi', 'anammagalhaes', 'anaprzsiczny', 'gilsongama', 'patriciaalmeiida', 'miguelcultri', 'carolribeiro2112', 'dandariene', 'biagavirete', 'rafael-yokoyama', 'jenicarvalho', 'beatrizodorcik', 'guizellik', 'priscillasantana']

  // pegar aleatoriamente 3 users pra fazer requisição
  const gitHubNickName = ['wtheodoro']

  useEffect(() => {
    gitHubNickName.map((user: string) => (
      apiUser.get(`${user}`)
        .then(response => console.log(response.data))
    ))
  }, [])

  return (
    <Container>
      <Title fontSize={'40px'}>Testimonials</Title>
      <div className="content">
        <Testimony />
        <Testimony /> 
        <Testimony /> 
        <Testimony /> 
      </div>
    </Container>
  );
};

export default Fourth;
