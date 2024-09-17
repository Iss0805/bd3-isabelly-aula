const database= 'bd3-isabelly-aula';

const collection = 'LIVRARIA';

use(database);


//LISTA TODOS OS LIVROS  DO TOLKIENEM ORDEM CRESCENTE DE VALOR // ORR 

db[collection].find(
   
    {
       autor: 'J.R.R Tolkien'
    }

).sort({valor:1}); // valor : -1 é igual a ordem decrescente
