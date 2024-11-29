import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Image, View } from 'react-native';
import { Wrapper, ContainerPrincipal, Imagem, TextoCampo, TextoHiperLink, BotaoVoltar, TextoVoltar } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao';
import { BarraInferior } from '../../components/BarraInferior';
import { Feather } from '@expo/vector-icons';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Detalhes({ route }: any) {

  const navigation = useNavigation<PropsNavigate['navigation']>();

  function handleLogin() {
    navigation.navigate('Login');
  }

  /*function funcao_de_cadastrar() {
    //execucao
  }*/

  return (
    <Wrapper>
      <Imagem>
        <Image
          style={{ width: '100%'}}
          source={require('../../assets/images/Logo.png')}
        />
      </Imagem>
    <ContainerPrincipal>
      {/*<BotaoVoltar onPress={() => navigation.popToTop()}>
          <Feather name="arrow-left" size={24} color="black" />
          <TextoVoltar> Voltar </TextoVoltar>
        </BotaoVoltar>*/}
      <TextoCampo>Título da vaga</TextoCampo>
      <Campo
        placeholder="Texto..."
        largura={369}
        altura={49}
        borda={10}
        corFundo="#FFFFFF"
        corTexto="#265019"
        corBorda="#BCFFA7"
        marginTop={10}
        editavel={false}
        texto="Texto..."
      />
      <TextoCampo>ID</TextoCampo>
      <Campo
        placeholder="Texto..."
        largura={369}
        altura={49}
        borda={10}
        corFundo="#FFFFFF"
        corTexto="#265019"
        corBorda="#BCFFA7"
        marginTop={10}
        editavel={false}
        texto="Texto..."
      />
      <TextoCampo>Status</TextoCampo>
      <Campo
        placeholder="Texto..."
        largura={369}
        altura={49}
        borda={10}
        corFundo="#FFFFFF"
        corTexto="#265019"
        corBorda="#BCFFA7"
        marginTop={10}
        editavel={false}
        texto="Texto..."
      />
      <TextoCampo>Data de Cadastro</TextoCampo>
      <Campo
        placeholder="Texto..."
        largura={369}
        altura={49}
        borda={10}
        corFundo="#FFFFFF"
        corTexto="#265019"
        corBorda="#BCFFA7"
        marginTop={10}
        editavel={false}
        texto="Texto..."
      />
      <TextoCampo>Descrição</TextoCampo>
      <Campo
        placeholder="Texto..."
        largura={369}
        altura={86}
        borda={10}
        corFundo="#FFFFFF"
        corTexto="#265019"
        corBorda="#BCFFA7"
        marginTop={10}
        editavel={false}
        texto="Texto..."
      />
      <Botao
        onPress={() => handleLogin()}
        texto="Contatar"
        tamanho={96}
        corFundo='#5FB643'
        corTexto='#FFFFFF'
        marginTop={20}
      />
    </ContainerPrincipal>
    <BarraInferior />
    </Wrapper>
  );
}
