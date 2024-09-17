const database= 'bd3-isabelly-aula';

const collection = 'LIVRARIA';

use(database);

db[collection].find(
    { 
        valor : {$gte : 100 , $lte : 170}
    }

);