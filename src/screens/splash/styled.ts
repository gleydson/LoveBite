import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const Logo = styled.Image``;

export const Text = styled.Text`
  font-size: ${props => props.theme.fonts.bigger};
  color: ${props => props.theme.colors.text};
  margin-top: 10px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const Overlay = styled.Image`
  position: absolute;
  bottom: -30px;
  right: -160.5px;
`;
