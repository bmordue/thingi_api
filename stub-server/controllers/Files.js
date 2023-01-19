'use strict';

var utils = require('../utils/writer.js');
var Files = require('../service/FilesService');

module.exports.filesGet = function filesGet (req, res, next, id) {
  Files.filesGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filesGetdownload = function filesGetdownload (req, res, next, id) {
  Files.filesGetdownload(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filesGetfinalize = function filesGetfinalize (req, res, next, id) {
  Files.filesGetfinalize(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.filesPostfinalize = function filesPostfinalize (req, res, next, id) {
  Files.filesPostfinalize(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
