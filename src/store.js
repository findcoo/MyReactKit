switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./store.prod');
    break;
  case 'development':
    console.log(process.env.NODE_ENV);
    module.exports = require('./store.dev');
    break;
  default:
    module.exports = require('./store.prod');
    break;
}
