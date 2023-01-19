'use strict';

var utils = require('../utils/writer.js');
var Categories = require('../service/CategoriesService');

module.exports.categoriesGet = function categoriesGet (req, res, next, category_slug) {
  Categories.categoriesGet(category_slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoriesGetthings = function categoriesGetthings (req, res, next, category_slug) {
  Categories.categoriesGetthings(category_slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
