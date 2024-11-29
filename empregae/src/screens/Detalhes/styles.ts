import styled from 'styled-components/native';



export const ContainerPrincipal = styled.View`
  flex: 1;
  width: 100%;
  background-color: #FFFFFF;
`;

export const Imagem = styled.View`
  width: 100%;
  height: 220;
  background-color: #FFFFFF;
  padding-bottom: 200px;

`;

export const TextoCampo = styled.Text`
  margin-left: 25px;
  //font-family: 'Istok Web';
  color: #265019;
  font-weight: bold;
  padding-top: 20px;
  font-size: 14px;
`;

export const TextoHiperLink = styled.Text`
  align-self: center;
  //font-family: 'Istok Web';
  color: #265019;
  font-weight: bold;
  padding-top: 100px;
  font-size: 14px;
`;

export const TextoVoltar = styled.Text` 
    font-size: 14px;
    color: red;
`;

export const BotaoVoltar = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    justify-content: first baseline;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;