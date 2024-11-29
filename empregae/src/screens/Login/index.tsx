import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Botao } from '../../components/Botao';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/src/utils/types';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { Campo } from '@/src/components/Campo';
import React from 'react';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home() {
  const navigation = useNavigation<Props['navigation']>();

  function handleLogin() {
    navigation.navigate('Usuario');
  }

  function handleCadastrar() {
    navigation.navigate('Detalhes');
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
      />
      <Botao
        onPress={() => handleLogin()}
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
    //fontFamily: 'Istok Web',
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
    //fontFamily: 'Istok Web',
    color: '#265019',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
