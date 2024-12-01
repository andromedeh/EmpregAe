import { RootStackParamList, VagaProps } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Wrapper, ContainerPrincipal, Imagem, TextoCampo } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao';
import { BarraInferior } from '../../components/BarraInferior';
import { Linking } from 'react-native';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Detalhes({ route }: any) {

  const navigation = useNavigation<PropsNavigate['navigation']>();

  const vaga: VagaProps = route.params?.vaga || {};

  const campos = [
    { label: 'ID', texto: vaga.id?.toString() || 'N/A' },
    { label: 'Título da vaga', texto: vaga.titulo || 'N/A' },
    { label: 'Descrição', texto: vaga.descricao || 'N/A' },
    {
      label: 'Data de Cadastro',
      texto: vaga.dataCadastro
        ? new Date(vaga.dataCadastro).toLocaleDateString() || 'N/A'
        : 'N/A',
    },
    { label: 'Telefone', texto: vaga.telefone?.toString() || 'N/A' },
    { label: 'Status', texto: vaga.status || 'N/A' },
    { label: 'Empresa', texto: vaga.empresa || 'N/A' },
  ];

  const renderItem = ({ item }: { item: { label: string, texto: string } }) => {
    const alturaCampo = item.label === 'Descrição' ? 86 : 49;
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

  function handleContatar() {
    if (!vaga.telefone) {
      alert('Número de telefone não disponível.');
      return;
    }
    const telefone = vaga.telefone?.toString();
    const url = `https://wa.me/${telefone}`;

    Linking.openURL(url)
      .then(() => {
        console.log('Redirecionando para o WhatsApp...');
      })
      .catch((error) => {
        console.error('Erro ao tentar abrir o WhatsApp: ', error);
        alert('Erro ao tentar abrir o WhatsApp. Verifique se ele está instalado.');
      });
  }

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
        {vaga.status === 'aberta' && (
          <Botao
            onPress={handleContatar}
            texto="Contatar"
            tamanho={96}
            corFundo='#5FB643'
            corTexto='#FFFFFF'
            marginTop={10}
          />
        )}
      </ContainerPrincipal>
      <BarraInferior />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  flatList: {
    maxHeight: 512,
    marginBottom: 20,
  },
});