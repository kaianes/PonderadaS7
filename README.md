# PonderadaS7
Caso de teste automatizados da solução ASAS.

# Testes automatizados - oficinas 

### Setup

Para o package.json: `npm init` 

Para o axios: `npm install axios`

Para o jest: `npm install jest --save-dev`

Para executar os testes: `npm test`

## Teste 01 - teste de retorno de todas as oficinas.

### Objetivo 
- Rertonar um array com todas as oficinas.

### Pré-condição
- Existir a rota `/oficinas` no backend.
- Estar autenticado no sistema ASAS.
- Existir pelo menos uma oficina cadastrada no sistema.

### Procedimento de Teste
- Requisição GET para `/oficinas`.
- Verificar se a resposta contém as oficinas cadastradas.

### Resultado Esperado
- Caso existam uma ou mais oficinas cadastradas, o teste 01 deve retornar essas entidades.
- Caso não exista nenhuma oficina cadastrada, o sistema deve retornar o feedback "erro 404"

### Resultado Obtido
- Com dados corretos, o teste retorna um array de oficinas.
- Com erro de autenticação, o teste retorna o "erro 401".

### Pós-condição
- Os dados cadastrados devem permanecer os mesmos na base de dados.

## Teste 02 - teste de retorno de uma oficina específica.

### Objetivo 
- Rertonar um objeto com a oficina desejada.

### Pré-condição
- Existir a rota `/oficinas/${oficinaId}` no backend.
- Estar autenticado no sistema ASAS.
- A oficina pesquisada existir no sistema.

### Procedimento de Teste
- Requisição GET para `/oficinas/${oficinaId}`.
- Verificar se a resposta contém a oficina cadastrada.

### Resultado Esperado
- Caso exista essa oficina cadastrada, o teste 02 deve retornar esse objeto.
- Caso não exista nenhuma oficina cadastrada, o sistema deve retornar o feedback "erro 404"

### Resultado Obtido
- Com dados corretos, o teste retorna a oficina cadastrada.
- Com erro de autenticação, o teste retorna o "erro 401".

### Pós-condição
- Os dados cadastrados devem permanecer os mesmos na base de dados.

