# Criar email pelo Ethereal
https://ethereal.email/create

# Para verificar o rabbit
https://www.cloudamqp.com/cl

# Configurar banco de dados 
MongoDB

# Instalar dependencias
/api -> npm install
/web -> npm install

# Obs
- Toda vez que uma tarefa é criada a API manda uma mensagem para o Rabbit informando que uma mensagem foi criada para poder o disparo do email
- API não faz o disparo do email
- Serviço assincrono 

# Instalar cypress
npm i cypress -D 
npx cypress open

## Interface API 
npm i cypress-plugin-api -D

É importante trabalhar também com a qualidade dos dados.

# trabalhar com cypress rodando em 'backstage'
npx cypress run 

Coisas novas para mim 
- Mexer com o MongoDB
- eql para ignorar qualquer espaçamento
- Entender um pouco da organização de como funciona o cypress.config.js pois lá ele centralizou algumas coisas de banco de dados que ainda não tinha mexido tão a fundo