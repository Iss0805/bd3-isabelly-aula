// mongoose.connect('mongodb+srv://sisabelly073:2107Alsira@cluster0.kadrepk.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000 // 5 segundos
// });

const database= 'bd3-isabelly-aula';

const collection = 'LIVRARIA';

use(database);

db.createCollection(collection)