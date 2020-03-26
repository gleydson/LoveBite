import React from 'react';

import { Container, Logo, Text, Overlay } from './styled';

const lotus = require('@assets/images/logo/lotus.png');
const overlay = require('@assets/images/overlay/overlay.png');

export default function splash() {
  return (
    <Container>
      <Logo source={lotus} />
      <Text>Love Bite</Text>
      <Overlay source={overlay} />
    </Container>
  );
}
