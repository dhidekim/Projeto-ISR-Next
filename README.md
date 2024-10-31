# Sobre o projeto:

O projeto foi desenvolvido em react.js com next.js, basicamente para testar o recurso ISR (incremental static regenerate) e testar com Amplify.

Foi utilizado uma API aberta https://pokeapi.co/, somente para trazer os dados dinâmicos.

A estratégia é validar se as páginas são cacheadas e atualizadas, somente após o revalidate de 5 minutos, para evitar que a cada chamada da página, se realize a consulta na API, economizando na quantidade de requisições, algo vantajoso para alguns cenários vividos no mundo empresarial.

# Instruções para executar o projeto:

- Clone o projeto
- Execute o comando **yarn install**
- Execute o comando **yarn build** para buildar a aplicação
- Execute o comando **yarn start** para executar a aplicação.
- Acesse no navegador: **http://localhost:3000/** You will can that the application no execute api call and after 5 minutes execute api call to get data and cache again.
