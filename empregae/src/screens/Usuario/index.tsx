import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Image, View } from 'react-native';
import { ContainerPrincipal, TextoCampo, TextoHiperLink, BotaoVoltar, TextoVoltar } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao';
import { BarraInferior } from '../../components/BarraInferior';
import { Feather } from '@expo/vector-icons';
import React from 'react';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Usuario({ route }: any) {

  const navigation = useNavigation<PropsNavigate['navigation']>();

  function handleLogin() {
    navigation.navigate('Login');
  }

  /*function funcao_de_cadastrar() {
    //execucao
  }*/

  return (
    <ContainerPrincipal>
      {/*<BotaoVoltar onPress={() => navigation.popToTop()}>
          <Feather name="arrow-left" size={24} color="black" />
          <TextoVoltar> Voltar </TextoVoltar>
        </BotaoVoltar>*/}
      <Image
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
        texto="Alterar dados"
        tamanho={118}
        corFundo='#5FB643'
        corTexto='#FFFFFF'
        marginTop={70}
      />

      <Botao
        onPress={() => handleLogin()}
        texto="Sair da conta"
        tamanho={118}
        corFundo='#265019'
        corTexto='#FFFFFF'
        marginTop={70}
      />
      <BarraInferior />
    </ContainerPrincipal>
  );
}
