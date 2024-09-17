const database= 'bd3-isabelly-aula';

const collection = 'LIVRARIA';

use(database);

db[collection].find({
    "categoria":"Fantasia Heroica",
    },

    {"_id":0,"codigo":0,"descricao":0}




);