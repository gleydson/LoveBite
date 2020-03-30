import React from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import { setIsShowOverboarding } from '@store/ducks/settings/actions';

import i18n from '@services/i18n';

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

const location = require('@assets/images/intro/location.png');

export default function intro_location() {
  const dispatch = useDispatch();

  function handleSubmit() {
    Keyboard.dismiss();
    dispatch(setIsShowOverboarding(false));
  }

  return (
    <Container>
      <MainContent>
        <Title>{i18n.t('intro-location_title')}</Title>
        <Image source={location} />
        <Subtitle>{i18n.t('intro-location_subtitle')}</Subtitle>
      </MainContent>
      <ButtonContainer>
        <Button onPress={handleSubmit}>
          <TextButton>{i18n.t('intro-location_button')}</TextButton>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
