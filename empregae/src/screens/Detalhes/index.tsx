import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Wrapper, ContainerPrincipal, Imagem, TextoCampo } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao';
import { BarraInferior } from '../../components/BarraInferior';
import React from 'react';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Detalhes({ route }: any) {
  const navigation = useNavigation<PropsNavigate['navigation']>();

  function handleLogin() {
    navigation.navigate('Login');
  }

  const campos = [
    { label: 'Título da vaga', texto: 'Texto...' },
    { label: 'ID', texto: 'Texto...' },
    { label: 'Status', texto: 'Texto...' },
    { label: 'Data de Cadastro', texto: 'Texto...' },
    { label: 'Descrição', texto: 'Texto...' },
    { label: 'Telefone', texto: 'Texto...' },
    { label: 'Empresa', texto: 'Texto...' },
  ];

  const renderItem = ({ item }: { item: { label: string, texto: string } }) => {
    const alturaCampo = item.label === 'Descrição' ? 86 : 49; // Aumenta a altura do campo "Descrição"
    return (
      <>
        <TextoCampo>{item.label}</TextoCampo>
        <Campo
          placeholder="Texto..."
          largura={369}
          altura={alturaCampo}
          borda={10}
          corFundo="#FFFFFF"
          corTexto="#265019"
          corBorda="#BCFFA7"
          marginTop={10}
          editavel={false}
          texto={item.texto}
        />
      </>
    );
  };

  return (
    <Wrapper>
      <Imagem>
        <Image
          style={{ width: '100%' }}
          source={require('../../assets/images/Logo.png')}
        />
      </Imagem>
      <ContainerPrincipal>
        <FlatList
          data={campos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          showsVerticalScrollIndicator={true}

        />
        <Botao
          onPress={() => handleLogin()}
          texto="Contatar"
          tamanho={96}
          corFundo='#5FB643'
          corTexto='#FFFFFF'
          marginTop={5}
        />
      </ContainerPrincipal>
      <BarraInferior />
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  flatList: {
    maxHeight: 512, // Define a altura máxima da FlatList
    marginBottom: 20, // Espaço inferior entre a lista e o botão
  },
});