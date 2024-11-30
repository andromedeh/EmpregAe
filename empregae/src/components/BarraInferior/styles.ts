import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: #5FB643;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
`;

export const Icone = styled.TouchableOpacity`
  margin-left: 110;
  align-items: center;
  width: 45px;
  height: 35px;
`;

export const Texto = styled.Text`
  color: #FFFFFF;
  font-size: 10px;
`;