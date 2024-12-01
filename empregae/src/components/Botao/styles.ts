import styled from 'styled-components/native';

type ContainerProps = {
  tamanho: number;
  corFundo: string;
  marginTop?: number;
};

type TextProps = {
  corTexto: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${({ tamanho }: any) => `${tamanho}px`};  
  height: 32px;                              
  background-color: ${({ corFundo }: any) => corFundo};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  align-self: center;
  margin-top: ${({ marginTop }: any) => (marginTop ? `${marginTop}px` : '0')}; 
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ corTexto }: any) => corTexto};
`;
