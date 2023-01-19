'use strict';

var utils = require('../utils/writer.js');
var Collections = require('../service/CollectionsService');

module.exports.collectionsDelete = function collectionsDelete (req, res, next, id) {
  Collections.collectionsDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.collectionsDeletething = function collectionsDeletething (req, res, next, collection_id, thing_id) {
  Collections.collectionsDeletething(collection_id, thing_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.collectionsGet = function collectionsGet (req, res, next, id) {
  Collections.collectionsGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.collectionsGetthings = function collectionsGetthings (req, res, next, id) {
  Collections.collectionsGetthings(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.collectionsPatch = function collectionsPatch (req, res, next, id) {
  Collections.collectionsPatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.collectionsPost = function collectionsPost (req, res, next) {
  Collections.collectionsPost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.collectionsPostthing = function collectionsPostthing (req, res, next, collection_id, thing_id) {
  Collections.collectionsPostthing(collection_id, thing_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
