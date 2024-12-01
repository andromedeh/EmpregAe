export type VagaProps = {
  id: number;
  titulo: string;
  status: string;
  descricao: string;
  dataCadastro: Date;
  telefone: number;
  empresa: string;
};

export type RootStackParamList = {
  Login: undefined;
  Principal: undefined;
  Cadastro: undefined;
  Usuario: undefined;
  Detalhes: { vaga: VagaProps };
}