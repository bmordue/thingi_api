'use strict';

var utils = require('../utils/writer.js');
var Tags = require('../service/TagsService');

module.exports.tagsGet = function tagsGet (req, res, next, tag) {
  Tags.tagsGet(tag)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tagsGetthings = function tagsGetthings (req, res, next, tag) {
  Tags.tagsGetthings(tag)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
