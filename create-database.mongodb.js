/**NOME DO BANCO DE DADOS */

const database= 'bd3-isabelly-aula'

// NOME DO BANCO DA COLEÇÃO DE DADOS

const collection = 'LIVRARIA'

// CRIAR OU ACESSAR O BANCO DE DADOS:
use(database)

// CRIAR UMA COLEÇÃO DE DADOS

db.createCollection(collection)