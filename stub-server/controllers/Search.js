'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.searchGet = function searchGet (req, res, next, term) {
  Search.searchGet(term)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchGetautocomplete = function searchGetautocomplete (req, res, next, term) {
  Search.searchGetautocomplete(term)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchGetlibrary = function searchGetlibrary (req, res, next, term) {
  Search.searchGetlibrary(term)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchGettag = function searchGettag (req, res, next, tag) {
  Search.searchGettag(tag)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
