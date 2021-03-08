import React, { useState } from 'react';
import Testimony from '../../components/Testimony';
import Title from '../../components/Title';
import { Container } from './styles';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'
import SwitchBlankDots from '../../components/SwitchBlankDots';

const Fourth = () => {
  const [usersInfo] = useState<any>(['1', '2', '3', '4', '5', '6', '7'])
  const [scrollX, setScrollX] = useState<any>(-80)
  const [constanteDeWalison, setConstanteDeWalison] = useState<number>(1)

  const scrollLeft = () => {
    let x = scrollX - Math.round(window.innerWidth/5)
    let list = usersInfo.length * 150
    if ((window.innerWidth - list) > x) {
      x = -80
    }
    setScrollX(x)
    if (constanteDeWalison <= 1) {
      return
    } else {
      setConstanteDeWalison(constanteDeWalison - 1)
    }
  }

  const scrollRight = () => {
    let x = scrollX + Math.round(window.innerWidth/5)
    if(x > usersInfo.length * 500) {
      return
    }
    setScrollX(x)
    setConstanteDeWalison(constanteDeWalison + 1)
  }

  return (
    <Container>
      <Title fontSize={'40px'}>Testimonials</Title>
      <div className="content" style={{ marginLeft: -scrollX }}>
        {
          usersInfo.map((i: string[]) => (
            <Testimony key={Number(i)}/>
          ))
        }
      </div>
      <div className="bot">
        <SwitchBlankDots dotPosition={Math.round(constanteDeWalison/1.8)}/>
        <div className="arrow">
          <HiOutlineArrowLeft onClick={scrollLeft} style={{ cursor: 'pointer'}}/>
          <HiOutlineArrowRight onClick={scrollRight} style={{ cursor: 'pointer'}}/>
        </div>
      </div>
      
      
    </Container>
  );
};

export default Fourth;
