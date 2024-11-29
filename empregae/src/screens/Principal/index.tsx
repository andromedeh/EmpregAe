import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Botao } from '../../components/Botao'
import { BarraInferior } from '@/src/components/BarraInferior';
import { Campo } from '@/src/components/Campo';
import { useState } from 'react';
import Vaga from '@/src/components/CardVaga';
import { ContainerPrincipal, ListContainer, Wrapper } from './styles';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Principal({ route }: any) {

  const navigation = useNavigation<PropsNavigate['navigation']>();

  const DATA = [
    {
      "id": 1,
      "titulo": "Desenvolvedor Front-end",
      "status": "Aberta"
    },
    {
      "id": 2,
      "titulo": "Analista de Dados",
      "status": "Fechada"
    },
    {
      "id": 3,
      "titulo": "Gerente de Projetos",
      "status": "Aberta"
    }
  ]

  const [searchText, setSearchText] = useState('');

  const vagasFiltradas = DATA.filter(vaga => {
    //console.log(String(searchText))
    const matchesSearch = vaga.titulo.toLowerCase().includes(searchText.toLowerCase());
    return matchesSearch
  });


  return (
    <Wrapper>
      <Image
        style={{ width: '100%' }}
        source={require('../../assets/images/Logo.png')}
      />
      <ContainerPrincipal>
        <Campo
          placeholder={'Busque uma vaga pelo ID...'}
          largura={328}
          altura={45}
          borda={20}
          corFundo={'#FFFFFF'}
          corTexto={'#265019'}
          corBorda={'#5FB643'}
          marginTop={8}
          icone={'search'}
          //onChange={setSearchText}
        />
        <ListContainer>
          <FlatList
            data={vagasFiltradas}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Vaga
                id={item.id}
                titulo={item.titulo}
                status={item.status}
              />
            )}
            style={styles.vagas}
          />
        </ListContainer>
      </ContainerPrincipal>
      <BarraInferior>
      </BarraInferior>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  vagas: {
    paddingTop: 8,
    flexDirection: 'column',
    width: '100%',
  },
});
