switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./index.prod');
    break;
  case 'development':
    module.exports = require('./index.dev');
    break;
  default:
    module.exports = require('./index.prod');
    break;
}
