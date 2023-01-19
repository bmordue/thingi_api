'use strict';

var utils = require('../utils/writer.js');
var Newest = require('../service/NewestService');

module.exports.newestGet = function newestGet (req, res, next) {
  Newest.newestGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
