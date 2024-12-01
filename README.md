# 💼 EmpregAê - App de Vagas de Emprego
Seja bem-vindo(a) ao EmpregAê! Este aplicativo para vagas de emprego foi desenvolvido como projeto final da trilha de Desenvolvimento Mobile da RESTIC36. 

## 🚀 Visão Geral
O EmpregAê foi desenvolvido com o objetivo de colocar em prática e unir os conhecimentos adquiridos em desenvolvimento de aplicativos mobile e criação e conexão de API's. Assim, o projeto consiste em um aplicativo de vagas de emprego, no qual o usuário consegue se cadastrar e/ou logar, acessar vagas de emprego disponíveis, visualizar detalhes de uma vaga específica e contatar o responsável pela mesma. Nesse sentido, os dados das vagas são provenientes de uma API que armazena as informações em uma base de dados Sequelize e cujas operações CRUD são realizadas por meio do Postman. Ademais, os dados do usuário também são armazenados nessa base de dados assim que ele se cadastra.
Para tornar isso possível, o projeto conta com diversos mecanismos e tecnologias aplicadas que vão desde o desing da interface até o consumo da API: 
- Criação de protótipo no Figma;
- Implementação de aplicativo através do React Native e Expo;
- Criação e estilização de componentes com Styled-Components;
- Utilização de hooks, props e navegação;
- Armazenamento local com AsyncStorage;
- Criação e conexão com API;
- ORM com Sequelize;
- Autenticação de rotas e de usuário;

Para acessar nosso protótipo de interface, clique [aqui!](https://www.figma.com/design/nGHfP2kVjJY0TxeQAetzFy/Emprega%C3%AA?node-id=0-1&t=smxbCZWrTlQiBV7K-1)

## 📲 Funcionalidades do aplicativo
- Realizar cadastro e login;
- Visualizar lista de vagas de emprego encontradas;
- Buscar por vaga específica entre as disponíveis;
- Visualizar detalhes de uma vaga de emprego;
- Redirecionar para WhatsApp da vaga de emprego, caso ela esteja aberta;
- Editar dados pessoais;

## 🛠️ Ferramentas e Linguagens
Este projeto conta com seguintes tecnologias:

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 🧩 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:

- Node.js 
- Expo CLI e dependências 
- Yarn
- Emulador Android/iOS ou Expo Go (emular diretamente pelo celular)

## ⚙️ Como rodar o projeto

Com os pré-requisitos instalados, basta clonar o repositório do Github em sua máquina, descompactar o arquivo e abrir a pasta no editor de código de sua preferência. Ao abrir o projeto, para instalar as dependências e bibliotecas utilize o comando npm install. Caso falte alguma biblioteca, elas podem ser baixadas com os seguintes comandos:

Styled-components:
- yarn add styled-components
- yarn add @types/styled-components-react-native -D

Navigation:
- yarn add @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context

AsyncStorage:
- yarn add @react-native-async-storage/async-storage

API com Express:
- npm install express uuid nodemon

Sequelize:
- npm install sequelize sqlite3

Axios:
- npm install axios

Depois de instalar as dependências e bibliotecas, no terminal do seu editor de código e na pasta do aplicativo, utilize os seguintes comandos para iniciar o EmpregAe:

- npm start (para dar início ao servidor e à api)
- npx expo start (para dar início ao aplicativo, selecionando a forma que deseja abrir o Expo App)

## 🔗 Links Úteis

Aqui estão alguns links que podem te ajudar durante a utilização e estudos:

- [React Native](https://reactnative.dev/docs/getting-started)
- [Node.js](https://nodejs.org/en/)
- [Expo](https://docs.expo.dev/tutorial/create-your-first-app/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Postman](https://www.postman.com/)

## 🔎 Observações sobre o projeto

- A manutenção das vagas disponíveis (criação, leitura, atualização e remoção) é realizada por meio da plataforma Postman;
- O rota base para a conexão com a API foi definida utilizando a porta 3000 e o endereço de IP padrão para aplicativos androids (10.0.2.2:3000). Isso pode ser alterado no arquivo api.ts (src/services/api.ts) ao trocar o valor da baseURL por outro (ex:. localhost:3000).

## 🧑‍💻 Equipe

- [Ana Carolina Souza Sampaio](https://github.com/ana13-carolina)
- Andreina Novaes Silva Melo (eu 😄)
- [Estêvão Viana Queiroz](https://github.com/Txtravos)
- [João Vitor Cangussu Bernardes Oliveira](https://github.com/jvcangussu)
- [Thiago Fernandes Pereira de Sousa](https://github.com/ThiagoFPSousa)

