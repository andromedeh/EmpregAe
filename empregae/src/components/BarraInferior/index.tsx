import React from 'react';
import { Container, Icone, Texto } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/src/utils/types';

type Props = NativeStackScreenProps<RootStackParamList>;

export function BarraInferior() {
  const navigation = useNavigation<Props['navigation']>();
  return (
    <Container>
      <Icone onPress={() => navigation.navigate('Auth', { screen: 'Principal' })}>
        <Feather name="home" color={'#ffffff'} size={30} />
        <Texto>
          Principal
        </Texto>
      </Icone>
      <Icone onPress={() => navigation.navigate('Auth', { screen: 'Usuario' })}>
        <Feather name="user" color={'#ffffff'} size={30} />
        <Texto>
          Perfil
        </Texto>
      </Icone>
    </Container>
  );
}
