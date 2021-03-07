import React from 'react';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';
import LockGirl from '../../components/svgs/LockGirl';
import MonkGirl from '../../components/svgs/MonkGirl';
import Print from '../../components/svgs/Print';
import SearchMan from '../../components/svgs/SearchMan';
import Title from '../../components/Title';
import Unity from '../../components/Unity';

import { Container } from './styles';

const third = () => {
  return (
    <Container>
      <Title fontSize={'40px'} children={'Features'}/>
      <Paragraph fontSize={'18px'} width={'584px'}
        children={'Some of the features and advantages that we provide for those of you who store data in this Data Warehouse'}/>
        
      <div className="content">
        <div className="first">
          <Unity unityTitle={'Search Data'} backgroundColor={'#68C9BA20'}
          svg={<SearchMan/>}>
            Don't worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time
          </Unity>

          <Unity unityTitle={'24 Hours Access'} backgroundColor={'#9C69E220'}
          svg={<MonkGirl />}>
            Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urget.
          </Unity>
        </div>
        
        <div className="second">
          <Unity unityTitle={'Print Out'} backgroundColor={'#F063BB20'}
          svg={<Print />}>
            Print out service gives you convenience if someday you need print data, just edit it all and just print it.
          </Unity>

          <Unity unityTitle={'Security Code'} backgroundColor={'#2D9CDB20'}
          svg={<LockGirl />}>
            Data Security is one of our best facilities. Allowws for you files to be safer. The file can be secured with a code or password that you created so only you can open the file.
          </Unity>
        </div>
      </div>
    </Container>
  );
};

export default third;
