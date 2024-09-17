const database= 'bd3-isabelly-aula';

const collection = 'LIVRARIA';

use(database);


//SELECIONA UM LIVRO DE UMA CATEGORIA E UM VALOR DETERMINDO 

db[collection].find(
   
    {
        $and: [
        {categoria : { $eq:'Ficção Científica' }} ,
        { valor : {$lte: 176}}
    ] 
    }

);