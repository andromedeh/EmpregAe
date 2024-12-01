import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { Alert, Image, View } from 'react-native';
import { ContainerPrincipal, TextoCampo, TextoHiperLink, BotaoVoltar, TextoVoltar } from './styles';
import { Campo } from '@/src/components/Campo';
import { Botao } from '../../components/Botao';
import { BarraInferior } from '../../components/BarraInferior';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import api from '@/src/services/api';

type PropsNavigate = NativeStackScreenProps<RootStackParamList>;

export default function Usuario({ route }: any) {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEditar = async () => {
    try {
      const jsonValue = JSON.stringify({
        "id": id,
        "nome": nome,
        "email": email,
        "senha": senha
      });
      await AsyncStorage.setItem('user', jsonValue);
      const response = await api.put(`/api/usuarios/${id}`, {
        "id": id,
        "nome": nome,
        "email": email,
        "senha": senha
      });

      if (response.status === 200) {
        alert('Dados atualizados com sucesso!');
      } else {
        alert('Falha ao atualizar os dados!');
      }
    } catch (e) {
      console.log("Erro ao atualizar!", e);
      alert(`Erro ao tentar atualizar`);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue !== null) {
          let user = JSON.parse(jsonValue);
          const response = await api.get(`/api/usuarios/${user.id}`);
          user = response.data;
          setNome(user.nome);
          setEmail(user.email);
          setSenha(user.senha);
          setId(user.id);
        } else {
          console.log('Usuário não encontrado.');
        }
      } catch (e) {
        console.log('Erro ao obter dados: ', e);
      }
    };
    getData();
  }, []);

  const navigation = useNavigation<PropsNavigate['navigation']>();

  function handleLogout() {
    navigation.navigate('Login');
  }

  return (
    <ContainerPrincipal>
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
        editavel={true}
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
        editavel={true}
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
        editavel={true}
        texto={senha}
        onChange={setSenha}
      />
      <Botao
        onPress={handleEditar}
        texto="Alterar dados"
        tamanho={118}
        corFundo='#5FB643'
        corTexto='#FFFFFF'
        marginTop={70}
      />

      <Botao
        onPress={() => handleLogout()}
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
