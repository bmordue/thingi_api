'use strict';

var utils = require('../utils/writer.js');
var Featured = require('../service/FeaturedService');

module.exports.featuredGet = function featuredGet (req, res, next) {
  Featured.featuredGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
