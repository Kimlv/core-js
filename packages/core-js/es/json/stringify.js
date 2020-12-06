require('../../modules/es.json.stringify');
var getBuiltIn = require('../../internals/get-built-in');

// eslint-disable-next-line no-unused-vars
module.exports = function stringify(it, replacer, space) {
  return getBuiltIn('JSON', 'stringify').apply(null, arguments);
};
