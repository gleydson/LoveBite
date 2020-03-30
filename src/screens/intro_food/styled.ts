import { Keyboard, Platform, Animated } from 'react-native';

import styled from 'styled-components/native';

export const KeyboardSafe = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
  enabled: Platform.OS === 'ios',
})``;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fonts.big};
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
  padding: 0 20px;
`;

export const Subtitle = styled.Text`
  font-size: ${props => props.theme.fonts.small};
  color: ${props => props.theme.colors.text_weak};
  text-align: center;
  margin-top: 50px;
  padding: 0 20px;
`;

export const Image = styled(Animated.Image)``;

export const ContainerBottom = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  padding: 20px 0;
`;

export const DDD = styled.TextInput.attrs({
  keyboardAppearance: 'dark',
  autoCompleteType: 'off',
  autoCorrect: false,
  keyboardType: 'phone-pad',
  maxLength: 3,
  returnKeyType: 'next',
  blurOnSubmit: false,
})`
  width: ${props => props.theme.metrics.widthScreen * 0.8 * 0.2}px;
  border-bottom-width: 3px;
  border-style: solid;
  border-color: #d9d9d9;
  text-align: center;
  padding: 10px 10px 15px 10px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fonts.medium};
  margin-right: 15px;
`;

export const Number = styled.TextInput.attrs({
  keyboardAppearance: 'dark',
  autoCompleteType: 'off',
  autoCorrect: false,
  keyboardType: 'phone-pad',
  maxLength: 11,
  returnKeyType: 'send',
})`
  width: ${props => props.theme.metrics.widthScreen * 0.8 * 0.6}px;
  border-bottom-width: 3px;
  border-style: solid;
  border-color: #d9d9d9;
  text-align: center;
  padding: 10px 10px 15px 10px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fonts.medium};
`;

export const ContainerButton = styled.View`
  padding: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  width: ${props => props.theme.metrics.widthScreen * 0.8}px;
  height: 45px;
  background-color: #00b300;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: ${props => props.theme.fonts.small};
  text-transform: uppercase;
`;
