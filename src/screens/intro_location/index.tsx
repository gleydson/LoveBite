import React from 'react';
import { Keyboard } from 'react-native';

import {
  Container,
  MainContent,
  Image,
  Title,
  Subtitle,
  ButtonContainer,
  Button,
  TextButton,
} from './styled';
import useStorage from '@hooks/useStorage';

const location = require('@assets/images/intro/location.png');

export default function intro_location() {
  const [isOverboardingFinalized, setIsOverboardingFinalized] = useStorage('@isOverboardingFinalized', false);

  function handleSubmit() {
    Keyboard.dismiss();
    setIsOverboardingFinalized(!isOverboardingFinalized);
  }

  return (
    <Container>
      <MainContent>
        <Title>Find Your Nearest Restaurant!</Title>
        <Image source={location} />
        <Subtitle>
          It is a long established fact that a reader will be distracted by the
          readablli
        </Subtitle>
      </MainContent>
      <ButtonContainer>
        <Button onPress={handleSubmit}>
          <TextButton>Location</TextButton>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
