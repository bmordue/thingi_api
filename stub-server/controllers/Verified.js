'use strict';

var utils = require('../utils/writer.js');
var Verified = require('../service/VerifiedService');

module.exports.verifiedGet = function verifiedGet (req, res, next) {
  Verified.verifiedGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
