const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.Promise = global.Promise;

dotenv.config();

const URL_DB = process.env.DB_CONNECT || 'mongodb://localhost:27017/enp-db';
mongoose.connect(URL_DB, { useNewUrlParser: true , useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log(`Connected to mongoose at ${URL_DB}`))

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)