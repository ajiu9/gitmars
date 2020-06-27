"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sh = require('shelljs');

var _require = require('./global'),
    defaults = _require.defaults,
    pwd = _require.pwd;

var configFrom = require('./configFrom');

var getConfig = function getConfig() {
  var config = {};

  if (configFrom === 1) {
    var str = sh.cat(pwd + '/.gitmarsrc').stdout.replace(/(^\n*)|(\n*$)/g, '').replace(/\n{2,}/g, '\n').replace(/\r/g, '').replace(/[^\S\x0a\x0d]/g, ''),
        arr = [];
    if (str) arr = str.split('\n');
    arr.forEach(function (el) {
      el.replace(/^([a-zA-Z0-9]+)\=([\s\S]+)$/, function (a, b, c) {
        config[b] = c || null;
      });
    });
  } else if (configFrom === 2) {
    config = require(pwd + '/gitmarsconfig.json');
  }

  return _objectSpread(_objectSpread({}, defaults), config);
};

module.exports = getConfig();