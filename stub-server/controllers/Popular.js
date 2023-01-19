'use strict';

var utils = require('../utils/writer.js');
var Popular = require('../service/PopularService');

module.exports.popularGet = function popularGet (req, res, next) {
  Popular.popularGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
