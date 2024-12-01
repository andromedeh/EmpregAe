import styled from 'styled-components/native';

type ContainerProps = {
  largura: number;
  altura: number;
  borda: number;
  corFundo: string;
  corBorda: string;
  marginTop: number;
};

type TextoProps = {
  corTexto: string;
};

export const Container = styled.View<ContainerProps>`
  width: ${({ largura }: any) => `${largura}px`};
  height: ${({ altura }: any) => `${altura}px`};
  flex-direction: row;
  align-self: center;
  background-color: ${({ corFundo }: any) => corFundo};
  border-radius: ${({ borda }: any) => `${borda}px`};
  border: 1.5px solid ${({ corBorda }: any) => corBorda};
  margin-top: ${({ marginTop }: any) => `${marginTop}px`};
  elevation: 5;
`;

export const Texto = styled.TextInput<TextoProps>`
  flex: 1;
  font-size: 16px;
  padding-left: 8px;
  color: ${({ corTexto }: any) => corTexto};
`;

export const TextoExibicao = styled.Text<TextoProps>`
  flex: 1;
  font-size: 16px;
  padding-left: 8px;
  color: ${({ corTexto }: any) => corTexto};
  text-align: left;
  align-self: center;
`;

export const Icone = styled.View`
  align-self: center;
  margin-right: 15px;
`;