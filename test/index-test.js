var vows = require('vows');
var assert = require('assert');
var util = require('util');
var pinterest = require('passport-pinterest-oauth');


vows.describe('passport-pinterest-oauth').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(pinterest.version);
    },
    /*'should export OAuth strategy': function (x) {
      assert.isFunction(pinterest.Strategy);
      assert.isFunction(pinterest.OAuthStrategy);
      assert.equal(pinterest.Strategy, pinterest.OAuthStrategy);
    },*/
    'should export OAuth 2.0 strategy': function (x) {
      assert.isFunction(pinterest.OAuth2Strategy);
    },
  },
  
}).export(module);
