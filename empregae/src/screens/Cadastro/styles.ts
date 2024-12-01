import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ContainerPrincipal = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;
export const TextoCampo = styled.Text`
  margin-left: 35px;
  color: #265019;
  font-weight: bold;
  padding-top: 50px;
  font-size: 14px;
`;
export const TextoHiperLinkContainer = styled(TouchableOpacity)`
  align-self: center;
  margin-top: 100px;
`;
export const TextoHiperLink = styled.Text`
  color: #265019;
  font-weight: bold;
  font-size: 14px;
`;