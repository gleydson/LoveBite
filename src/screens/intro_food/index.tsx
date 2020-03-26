import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, TextInput, Animated, Easing } from 'react-native';

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
  const secondInputRef = useRef<TextInput>(null);

  const [ddd, setDDD] = useState('');
  const [number, setNumber] = useState('');

  const [imageSize] = useState(new Animated.ValueXY(IMAGE_SIZE));

  function handleKeyboardOpened(event: { duration: number }) {
    Animated.parallel([
      Animated.timing(imageSize.x, {
        duration: event.duration,
        toValue: IMAGE_SIZE.x * 0.5,
        easing: Easing.ease,
      }),
      Animated.timing(imageSize.y, {
        duration: event.duration,
        toValue: IMAGE_SIZE.y * 0.5,
        easing: Easing.ease,
      }),
    ]).start();
  }

  function handleKeyboardClosed(event: { duration: number }) {
    Animated.parallel([
      Animated.timing(imageSize.x, {
        duration: event.duration,
        toValue: IMAGE_SIZE.x,
        easing: Easing.ease,
      }),
      Animated.timing(imageSize.y, {
        duration: event.duration,
        toValue: IMAGE_SIZE.y,
        easing: Easing.ease,
      }),
    ]).start();
  }

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', handleKeyboardOpened);
    Keyboard.addListener('keyboardWillHide', handleKeyboardClosed);

    return () => {
      Keyboard.removeListener('keyboardWillShow', () => {});
      Keyboard.removeListener('keyboardWillHide', () => {});
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
            <Title>For Local Street Restaurant with Deals</Title>
            <Image
              style={{ width: imageSize.x, height: imageSize.y }}
              source={food}
            />
            <Subtitle>
              It is a long established fact that a reader will be distracted by
              the readablli
            </Subtitle>
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
              <TextButton>Next</TextButton>
            </Button>
          </ContainerButton>
        </Container>
      </KeyboardAvoidingView>
    </KeyboardSafe>
  );
}
