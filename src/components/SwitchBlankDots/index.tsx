import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface SwitchBlankDotsType {
  dotPosition?: number
}

const SwitchBlankDots = (props: SwitchBlankDotsType) => {
  console.log(props.dotPosition)
  return (
    <Container dotPosition={props.dotPosition}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default SwitchBlankDots;
