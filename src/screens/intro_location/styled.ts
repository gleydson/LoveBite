import { Animated } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const MainContent = styled.View`
  flex: 3;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fonts.big};
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
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

export const ButtonContainer = styled.View`
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
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
