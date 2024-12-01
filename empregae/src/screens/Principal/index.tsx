import { RootStackParamList, VagaProps } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Image, FlatList, StyleSheet } from 'react-native';
import api from '@/src/services/api';
import { BarraInferior } from '@/src/components/BarraInferior';
import { Campo } from '@/src/components/Campo';
import { useEffect, useState } from 'react';
import Vaga from '@/src/components/CardVaga';
import { ContainerPrincipal, ListContainer, Wrapper } from './styles';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Principal({ route }: any) {

  const navigation = useNavigation<PropsNavigate['navigation']>();

  const [vagas, setVagas] = useState<VagaProps[]>([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get('/api/vagas');
        setVagas(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoding(false);
      }
    };

    fetchVagas();
  }, []);

  const [searchText, setSearchText] = useState('');

  const vagasFiltradas = vagas.filter(vaga => {
    const searchLower = searchText.toLowerCase();
    const matchesID = vaga.id.toString().includes(searchLower);
    const matchesTitulo = vaga.titulo.toLowerCase().includes(searchLower);
    return matchesID || matchesTitulo;
  });


  return (
    <Wrapper>
      <Image
        style={{ width: '100%' }}
        source={require('../../assets/images/Logo.png')}
      />
      <ContainerPrincipal>
        <Campo
          placeholder={'Busque por uma vaga...'}
          largura={328}
          altura={45}
          borda={20}
          corFundo={'#FFFFFF'}
          corTexto={'#265019'}
          corBorda={'#5FB643'}
          marginTop={8}
          icone={'search'}
          onChange={setSearchText}
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
                descricao={item.descricao}
                dataCadastro={item.dataCadastro}
                telefone={item.telefone}
                empresa={item.empresa}
              />
            )}
            style={styles.vagas}
          />
        </ListContainer>
      </ContainerPrincipal>
      <BarraInferior />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  vagas: {
    maxHeight: 512, // Define a altura máxima da FlatList
    marginBottom: 60,
  },
});
