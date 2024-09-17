const database= 'bd3-isabelly-aula';

const collection = 'LIVRARIA';

use(database);

db[collection].find(
    {"descricao":/robôs/i},

    {"_id":0,"codigo":0}




);