import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #FFFFFF;
  border: 1px solid #5FB643;
  align-items: left;
  gap: 4px;
  width: 100%;
  height: 80px;
  border-radius: 16px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Conteudo = styled.View`
  gap: 8px;
  padding: 16px;
  justify-content: space-between;
  flex-direction: column;
  max-width: 80%;
`;

export const Titulo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: #265019;
`;

export const Status = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: #265019
`;

export const BotaoAbrir = styled.TouchableOpacity`
    border-radius: 0 16px 16px 0;
    padding: 0 24px;
    background-color: #5FB643;
    justify-content: center;
    height: 100%;
`;