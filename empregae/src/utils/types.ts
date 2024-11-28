export type VagaProps = {
  id: number,
  titulo: String,
  status: String,
  descricao: String,
  dataCadastro: Date,
  telefone: number,
  empresa: String,
}

export type RootStackParamList = {
    Login: undefined;
    Principal: undefined;
    Cadastro: undefined;
    Usuario: undefined;
    Detalhes: undefined;
}