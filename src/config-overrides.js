const rewireMobx = require('react-app-rewire-mobx')

const override = (config, env) => rewireMobx(config, env)
module.exports.override