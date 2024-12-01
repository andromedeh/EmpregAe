import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Alert, Image } from 'react-native';
import { ContainerPrincipal, TextoCampo, TextoHiperLink, TextoHiperLinkContainer } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao'
import React, { useState } from 'react';
import api from '@/src/services/api';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Cadastro({ route }: any) {
  const navigation = useNavigation<PropsNavigate['navigation']>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastrar = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    try {
      // Verificar se o email já está registrado
      const response = await api.get('/api/usuarios', { params: { email } });
      const userExists = response.data.some((user: { email: string }) => user.email === email);

      if (userExists) {
        Alert.alert('Erro', 'Este email já está cadastrado. Por favor, use outro email.');
        return;
      }

      const createResponse = await api.post('/api/usuarios', { nome, email, senha });

      if (createResponse.status === 201) {
        Alert.alert('Cadastro bem-sucedido!', 'Agora você pode fazer login.');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Houve um problema ao tentar cadastrar. Tente novamente.');
    }
  };

  return (
    <ContainerPrincipal>
      <Image
        style={{ width: '100%' }}
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
        texto={nome}
        onChange={setNome}
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
        texto={email}
        onChange={setEmail}

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
        texto={senha}
        onChange={setSenha}

      />
      <Botao
        onPress={handleCadastrar}
        texto="Cadastrar"
        tamanho={96}
        corFundo='#5FB643'
        corTexto='#FFFFFF'
        marginTop={100}
      />
      <TextoHiperLinkContainer onPress={() => navigation.navigate('Login')}>
        <TextoHiperLink>Já tem uma conta? Faça login aqui!</TextoHiperLink>
      </TextoHiperLinkContainer>
    </ContainerPrincipal>
  );
}