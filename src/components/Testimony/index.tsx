import React, { useEffect, useState } from 'react';
import { apiUser } from '../../services/api';
import Paragraph from '../Paragraph';

import { Container } from './styles';

const Testimony = () => {
  const [choosenOne, setChoosenOne] = useState<any>()
  const allGitHubNickName = ['virginia-silva', 'bm-santos', 'patriciahoc', 'meirylandmelo', 'danielfranchi', 'anammagalhaes', 'anaprzsiczny', 'gilsongama', 'patriciaalmeiida', 'miguelcutri', 'carolribeiro2112', 'dandariene', 'biagavirete', 'rafael-yokoyama', 'jenicarvalho', 'beatrizodorcik', 'guizellik', 'priscillasantana', 'wtheodoro']

  useEffect(() => {
    const randomNick = allGitHubNickName[Math.floor(Math.random() * allGitHubNickName.length)]
    apiUser.get(`/${randomNick}`).then(response => setChoosenOne(response.data))
  }, [])

  return (
    <Container>
      <img src={choosenOne?.avatar_url} alt="Foto" data-testid="img"/>
      <div className="content">
        <Paragraph fontSize={'18px'}>{choosenOne?.name || 'CADÊ SEU NOME?'}</Paragraph>
        <Paragraph fontSize={'14px'} color={'#9C69E2'}>{choosenOne?.bio || 'Front-end Dev on Facebook'}</Paragraph>
        <Paragraph fontSize={'18px'} width={'385px'}>
          Veni, vidi, vici. Carpe diem. Ex ore parvulorum veritas. Alis volat propriis. Exceptio regulam probat. Memento vivere. Amor vincit omnia. In vino veritas
        </Paragraph>
      </div>
    </Container>
  );
};

export default Testimony;
