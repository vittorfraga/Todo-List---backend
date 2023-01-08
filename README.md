# Todo List - Backend

Este é o repositório do backend da aplicacao Todo List, desenvolvida em Node.js com o intuito de criar, listar, atualizar e remover tarefas.

Para gerenciamento de dependências, foi utilizado o gerenciador de pacotes npm. As dependências utilizadas são:

\*\*dotenv:\*\* permite que variáveis de ambiente sejam lidas a partir de um arquivo '.env', facilitando o gerenciamento de configurações e senhas em ambiente de desenvolvimento e produção.

**mysql2:** é um driver de banco de dados MySQL que permite que o Node.js se comunique com o banco de dados MySQL.

**express:** é uma framework para aplicativos da web em Node.js que fornece uma série de recursos para criar APIs e aplicativos da web de forma rápida e fácil.

**nodemon:** é uma ferramenta que monitora os arquivos do seu projeto e reinicia automaticamente o servidor quando são detectadas alterações.

A aplicacao utiliza uma imagem do MySQL gerada pelo Docker como banco de dados. A imagem do MySQL é criada a partir de uma imagem base, que é uma imagem pré-configurada com o MySQL já instalado. Essa imagem é então "executada" em um container, que é uma instância isolada do MySQL rodando em um ambiente controlado pelo Docker. Dessa forma, é possível criar um ambiente de desenvolvimento consistente e reproduzível independentemente da máquina onde a aplicacao é executada.

A aplicacao faz um CRUD básico na tabela de tarefas, permitindo:

\*Listar todas as tarefas
\*Criar uma nova tarefa
\*Atualizar uma tarefa existente
\*Remover uma tarefa existente

Para rodar a aplicacao, é preciso seguir os seguintes passos:

.Clone o repositório em sua máquina
.Instale as dependências executando o comando npm install
.Crie um arquivo '.env' com as variáveis de ambiente necessáarías (veja o arquivo '.env.example' como referência) 4. Inicie a imagem do MySQL com o Docker
.Execute o comando npm start para iniciar a aplicacao

Com isso, a aplicacao estará rodando e pronta para receber requisições. Você pode testar as funcionalidades da aplicacao usando uma ferramenta como o Insomnia ou fazendo requisições diretamente pelo navegador.