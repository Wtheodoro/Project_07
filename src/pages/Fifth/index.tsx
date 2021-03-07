import React from 'react';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';

import { Container } from './styles';

const Fifth: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <div className="left-top">
        <Title fontSize={'40px'}>Try for Free!</Title>
        <Paragraph fontSize={'18px'}>
          Get limited 1 week free try out features!
        </Paragraph>
        </div>
        <div className="left-bottom">
          <div className="logo">
            <Logo />
            <Paragraph fontSize={'20px'} >DataWarehouse</Paragraph>
          </div>
          <Paragraph fontSize={'16px'}>Warehouse Society, 234</Paragraph>
          <Paragraph fontSize={'16px'}>Bahagia Ave Street</Paragraph>
          <Paragraph fontSize={'16px'}>info@warehouse.project</Paragraph>
          <Paragraph fontSize={'16px'}>1-234-5678 (Main)</Paragraph>
        </div>
        
      </div>
      <div className="right">
        <div className="right-top">
          <Button backgroundColor={'#F063B8'}>Learn more</Button>
          <Button backgroundColor={'#FFF'} icon={true} shadow={true}>Request demo</Button>
        </div>
        <div className="right-bottom">

          <div className="about">
            <Link>About</Link>
            <div className="group">
              <Link>Profile</Link>
              <Link>Features</Link>
              <Link>Careers</Link>
              <Link>DW News</Link>
            </div>
          </div>

          <div className="help">
            <Link>Help</Link>
            <div className="group">
              <Link>Support</Link>
              <Link>Sign up</Link>
              <Link>Guide</Link>
              <Link>Reports</Link>
              <Link>Q&A</Link>
            </div>
          </div>

          <div className="Social-media">
            <Link>Social Media</Link>
            <div className="logos">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Fifth;
