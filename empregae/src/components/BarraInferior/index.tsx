import React from 'react';
import { Container, Icone, Texto } from './styles';
import { Feather } from '@expo/vector-icons';

export function BarraInferior() {
  return (
    <Container>
      <Icone>
        <Feather name="home" color={'#ffffff'} size={30} />
        <Texto>
          Principal
        </Texto>
      </Icone>
      <Icone>
        <Feather name="user" color={'#ffffff'} size={30} />
        <Texto>
          Perfil
        </Texto>
      </Icone>
    </Container>
  );
}
