var loaderUtils = require('loader-utils');
var Typograf = require('typograf');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  this.value = content;

  var query = loaderUtils.parseQuery(this.query);
  var options = {
    lang    : query.lang    || 'en',
    mode    : query.mode    || 'default',
    enable  : query.enable  || [],
    disable : query.disable || [],
  };

  var tp = new Typograf( options );

  var result = tp.execute(content) || content;

  return result;
}
