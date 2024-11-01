# Sobre o projeto:

O projeto foi desenvolvido em react.js com next.js, basicamente para testar o recurso ISR (incremental static regenerate) e testar com Amplify.

Foi utilizado uma API aberta https://pokeapi.co/, somente para trazer os dados dinâmicos.

A estratégia é validar se as páginas são cacheadas e atualizadas, somente após o revalidate de 5 minutos, para evitar que a cada chamada da página, se realize a consulta na API, economizando na quantidade de requisições, algo vantajoso para alguns cenários vividos no mundo empresarial.

# Instruções para executar o projeto:

- Clone o projeto
- Execute o comando **yarn install**
- Execute o comando **yarn build** para buildar a aplicação
- Execute o comando **yarn start** para executar a aplicação.
- Acesse no navegador: **http://localhost:3000/**.
  Após 5 minutos irá apresentar um novo pokemon, depois de ter realizado o revalidate.

Ou solicitar o novo revalidate por meio deste endereço: **http://localhost:3000/api/revalidate?path=/**

Para ter mais segurança para a realização, configure uma variável na env. **MY_SECRET_TOKEN**

- Na página **http://localhost:3000/validate** possui uma lógica em que o revalidate é realizado a cada 10 segundos, mas na quarta a sexta tentativa existe a simulação da API ter erro, para demonstrar que e a página continuara retornando o último cache válido, após a sexta tentativa volta a consultar a API normalmente.
- Foi realizado isso para validar q sempre estará exibindo uma página válida.
