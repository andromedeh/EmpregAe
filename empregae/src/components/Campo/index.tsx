import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, Texto, Icone, TextoExibicao } from './styles';

type CampoProps = {
  placeholder: string;
  largura?: number;
  altura?: number;
  borda?: number;
  corFundo?: string;
  corTexto?: string;
  corBorda?: string;
  texto?: string;
  marginTop?: number;
  icone?: keyof typeof Feather.glyphMap;
  editavel?: boolean;
  onChange?: (text: string) => void;
};

export function Campo({
  placeholder,
  largura,
  altura,
  borda,
  corFundo,
  corTexto,
  corBorda,
  marginTop,
  icone,
  texto,
  editavel = true,
  onChange
}: CampoProps) {
  return (
    <Container largura={largura} altura={altura} borda={borda} corFundo={corFundo} corBorda={corBorda} marginTop={marginTop} onChange={onChange}>
      {editavel ? (
        <Texto
          placeholder={placeholder}
          placeholderTextColor={corTexto}
          style={{ color: corTexto }}
          onChangeText={onChange}
        />
      ) : (
        <TextoExibicao style={{ color: corTexto }}>{texto}</TextoExibicao>
      )}
      {icone && (
        <Icone>
          <Feather name={icone} size={20} color='#5FB643' />
        </Icone>
      )}
    </Container>
  );
}
