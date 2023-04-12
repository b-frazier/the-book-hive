const mongoose = require('mongoose');
const uri = '';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/book-hive', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
