import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, Animated, Easing, Platform } from 'react-native';

import i18n from '@services/i18n';

import {
  KeyboardSafe,
  KeyboardAvoidingView,
  Container,
  MainContent,
  Image,
  Title,
  Subtitle,
  ContactContainer,
  DDD,
  Number,
  ContainerButton,
  Button,
  TextButton,
} from './styled';

const food = require('@assets/images/intro/food.png');

const IMAGE_SIZE = {
  x: 321,
  y: 263,
};

interface Props {
  navigation: {
    navigate(route: string): void;
  };
}

export default function intro_food({ navigation }: Props) {
  const secondInputRef = useRef<any>(null);

  const [ddd, setDDD] = useState('');
  const [number, setNumber] = useState('');

  const [imageSize] = useState(new Animated.ValueXY(IMAGE_SIZE));

  function handleKeyboardOpened(event: { duration: number }) {
    const duration = Platform.OS === 'ios' ? event.duration : 50;
    Animated.parallel([
      Animated.timing(imageSize.x, {
        duration,
        toValue: IMAGE_SIZE.x * 0.5,
        easing: Easing.ease,
      }),
      Animated.timing(imageSize.y, {
        duration,
        toValue: IMAGE_SIZE.y * 0.5,
        easing: Easing.ease,
      }),
    ]).start();
  }

  function handleKeyboardClosed(event: { duration: number }) {
    const duration = Platform.OS === 'ios' ? event.duration : 50;
    Animated.parallel([
      Animated.timing(imageSize.x, {
        duration,
        toValue: IMAGE_SIZE.x,
        easing: Easing.ease,
      }),
      Animated.timing(imageSize.y, {
        duration,
        toValue: IMAGE_SIZE.y,
        easing: Easing.ease,
      }),
    ]).start();
  }

  useEffect(() => {
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      handleKeyboardOpened
    );
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      handleKeyboardClosed
    );

    return () => {
      Keyboard.removeAllListeners();
    };
  }, []);

  function handleSubmit() {
    Keyboard.dismiss();
    navigation.navigate('IntroLocation');
  }

  return (
    <KeyboardSafe>
      <KeyboardAvoidingView>
        <Container>
          <MainContent>
            <Title>{i18n.t('intro-food_title')}</Title>
            <Image
              style={{ width: imageSize.x, height: imageSize.y }}
              source={food}
            />
            <Subtitle>{i18n.t('intro-food_subtitle')}</Subtitle>
          </MainContent>
          <ContactContainer>
            <DDD
              onChangeText={setDDD}
              onSubmitEditing={() => secondInputRef.current?.focus()}
              value={ddd}
            />
            <Number
              ref={secondInputRef}
              onChangeText={setNumber}
              value={number}
            />
          </ContactContainer>
          <ContainerButton>
            <Button onPress={handleSubmit}>
              <TextButton>{i18n.t('intro-food_button')}</TextButton>
            </Button>
          </ContainerButton>
        </Container>
      </KeyboardAvoidingView>
    </KeyboardSafe>
  );
}
