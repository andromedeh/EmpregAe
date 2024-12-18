import React from 'react';
import { Container, Text } from './styles';

type Props = {
  onPress: () => void;
  texto: string;
  tamanho: number;
  corFundo: string;
  corTexto: string;
  marginTop?: number;
};

export function Botao({ onPress, texto, tamanho, corFundo, corTexto, marginTop }: Props) {
  return (
    <Container
      onPress={onPress}
      tamanho={tamanho}
      corFundo={corFundo}
      marginTop={marginTop}
    >
      <Text corTexto={corTexto}>{texto}</Text>
    </Container>
  );
}