import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Image } from 'react-native';
import { ContainerPrincipal, TextoCampo, TextoHiperLink } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao'


type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Cadastro({ route }: any) {

  const navigation = useNavigation<PropsNavigate['navigation']>();

  function handleLogin() {
    navigation.navigate('Login');
  }

  /*function funcao_de_cadastrar() {
    //execucao
  }*/

  return (
    <ContainerPrincipal>
      <Image
        style={{ width: '100%'}}
        source={require('../../assets/images/Logo.png')}
      />
      <TextoCampo>Nome</TextoCampo>
      <Campo
        placeholder="Digite seu nome..."
        largura={342}
        altura={35}
        borda={20}
        corFundo="#BCFFA7"
        corTexto="#265019"
        corBorda="#265019"
        marginTop={10}
      />
      <TextoCampo>Email</TextoCampo>
      <Campo
        placeholder="Digite seu email..."
        largura={342}
        altura={35}
        borda={20}
        corFundo="#BCFFA7"
        corTexto="#265019"
        corBorda="#265019"
        marginTop={10}
      />
      <TextoCampo>Senha</TextoCampo>
      <Campo
        placeholder="Digite sua senha..."
        largura={342}
        altura={35}
        borda={20}
        corFundo="#BCFFA7"
        corTexto="#265019"
        corBorda="#265019"
        marginTop={10}
      />
      <Botao
        onPress={() => handleLogin()}
        texto="Cadastrar"
        tamanho={96}
        corFundo='#5FB643'
        corTexto='#FFFFFF'
        marginTop={100}
      />
      <TextoHiperLink onPress={() => handleLogin()}>
        Já tem uma conta? Faça login aqui!
      </TextoHiperLink>
    </ContainerPrincipal>
  );
}
