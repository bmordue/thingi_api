'use strict';

var utils = require('../utils/writer.js');
var GroupTopics = require('../service/GroupTopicsService');

module.exports.grouptopicsDeletepin = function grouptopicsDeletepin (req, res, next, id) {
  GroupTopics.grouptopicsDeletepin(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grouptopicsGet = function grouptopicsGet (req, res, next, id) {
  GroupTopics.grouptopicsGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grouptopicsGetcomments = function grouptopicsGetcomments (req, res, next, id) {
  GroupTopics.grouptopicsGetcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grouptopicsGetthreadedcomments = function grouptopicsGetthreadedcomments (req, res, next, id) {
  GroupTopics.grouptopicsGetthreadedcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grouptopicsPatch = function grouptopicsPatch (req, res, next, id) {
  GroupTopics.grouptopicsPatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grouptopicsPostcomments = function grouptopicsPostcomments (req, res, next, id) {
  GroupTopics.grouptopicsPostcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.grouptopicsPostpin = function grouptopicsPostpin (req, res, next, id) {
  GroupTopics.grouptopicsPostpin(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
