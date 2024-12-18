import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Botao } from '../../components/Botao';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Campo } from '@/src/components/Campo';
import React, { useCallback } from 'react';
import { useState } from 'react';
import api from '../../services/api';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Login() {
  const navigation = useNavigation<Props['navigation']>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setSenha('');
    }, [])
  );

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Falha no login!', 'Por favor, preencha ambos os campos!');
      return;
    }
    try {
      const response = await api.get('/api/usuarios');
      const users = response.data;
      const user = users.find((u: { email: string; senha: string }) => u.email === email && u.senha === senha);

      if (user) {
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem('user', jsonValue);
        navigation.navigate('Auth', { screen: 'Principal' });
      } else {
        console.log('Login falhou!');
        Alert.alert('Falha no login!', 'Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Falha no login!', 'Houve um erro ao tentar fazer login. Tente novamente.');
    }
  };

  function handleCadastrar() {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: '100%' }}
        source={require('../../assets/images/Logo.png')}
      />
      <Text style={styles.textoCampo}>
        Email
      </Text>
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
      <Text style={styles.textoCampo}>
        Senha
      </Text>
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
        onPress={handleLogin}
        texto="Entrar"
        tamanho={96}
        corFundo="#5FB643"
        corTexto="#FFFFFF"
        marginTop={150}
      />
      <TouchableOpacity onPress={handleCadastrar} style={styles.textoHiperLinkContainer}>
        <Text style={styles.textoHiperLink}>
          Não tem uma conta? Cadastre-se aqui!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textoCampo: {
    marginLeft: 35,
    color: '#265019',
    fontWeight: 'bold',
    paddingTop: 50,
    fontSize: 14,
  },
  textoHiperLinkContainer: {
    alignSelf: 'center',
    marginTop: 150,
  },
  textoHiperLink: {
    color: '#265019',
    fontWeight: 'bold',
    fontSize: 14,
  },
});