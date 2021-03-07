import React, { useEffect, useState } from 'react';
import Testimony from '../../components/Testimony';
import Title from '../../components/Title';
import { apiUser } from '../../services/api';
import { Container } from './styles';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi'

const Fourth = () => {
  const [usersInfo, setUsersInfo] = useState<any>(['1', '2', '3', '4', '5'])
  const [scrollX, setScrollX] = useState<any>(-80)

  const scrollLeft = () => {
    let x = scrollX - Math.round(window.innerWidth/5)
    let list = usersInfo.length * 350
    if ((window.innerWidth - list) > x) {
      x = -80
    }
    setScrollX(x)
    console.log(usersInfo.length)
  }

  const scrollRight = () => {
    let x = scrollX + Math.round(window.innerWidth/5)
    if(x > usersInfo.length * 450) {
      return
    }
    setScrollX(x)
  }

  return (
    <Container>
      <Title fontSize={'40px'}>Testimonials</Title>
      <div className="content" style={{ marginLeft: -scrollX }}>
        {
          usersInfo.map((i: string[]) => (
            <Testimony />
          ))
        }
      </div>
      <div className="arrow">
        <HiOutlineArrowLeft onClick={scrollLeft}/>
        <HiOutlineArrowRight onClick={scrollRight}/>
      </div>
      
    </Container>
  );
};

export default Fourth;
