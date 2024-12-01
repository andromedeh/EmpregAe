import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';
import { Feather } from '@expo/vector-icons';

type Props = {
  onPress: () => void;
  texto: string;
  tamanho: number;
  corFundo: string;
  corTexto: string;
  marginTop?: number;
  disabled?: boolean;  // Permitir passar o estado disabled
  style?: object;
};

export function Botao({ onPress, texto, tamanho, corFundo, corTexto, marginTop, disabled = false, style }: Props) {
  return (
    <Container
      onPress={onPress}
      tamanho={tamanho}
      corFundo={corFundo}
      marginTop={marginTop}
      style={[style, disabled ? { opacity: 0.5 } : null]}  // Modificar a opacidade quando desabilitado
      disabled={disabled}
    >
      <Text corTexto={corTexto}>{texto}</Text>
    </Container>
  );
}
