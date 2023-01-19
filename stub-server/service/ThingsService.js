"use strict";

const fs = require("fs");

/**
 * Delete a thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsDelete = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Delete a file from a thing
 *
 * id String
 * file_id String
 * no response value expected for this operation
 **/
exports.thingsDeletefiles = function (id, file_id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Delete an image from a thing
 *
 * id String
 * image_id String
 * no response value expected for this operation
 **/
exports.thingsDeleteimages = function (id, image_id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Delete a like
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsDeletelikes = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get thing by id
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGet = function (id) {
  return new Promise(function (resolve, reject) {
    const id = 5752028;
    resolve(JSON.parse(fs.readFileSync(`json/things/get_${id}.json`)));
  });
};

/**
 * Get a list of thing ancestors
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetancestors = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get thing category
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetcategories = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 *                                Get an unthreaded paginated list of comment                               objects. See also GET /things/id/threaded_comments
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetcomments = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get copies/makes of a thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetcopies = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get a list of thing derivatives
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetderivatives = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get file(s) by thing
 *
 * id String
 * file_id String
 * no response value expected for this operation
 **/
exports.thingsGetfiles = function (id, file_id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get image(s) by thing
 *
 * id String
 * image_id String
 * no response value expected for this operation
 **/
exports.thingsGetimages = function (id, image_id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get users who liked this thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetlikes = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 *                                Get a list of prints associated with a thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetprints = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 *                                Get an unthreaded paginated list of root comment                               objects
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetrootcomments = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Get tags on this thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGettags = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 *                                Get all comments for this thing in a quick                               pre-threaded view. This is an alternative to GET                               /things/id/comments
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsGetthreadedcomments = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Update an existing thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPatch = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Update an existing image
 *
 * id String
 * image_id String
 * no response value expected for this operation
 **/
exports.thingsPatchimages = function (id, image_id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Create a new thing
 *
 * no response value expected for this operation
 **/
exports.thingsPost = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Post a comment
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPostcomments = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Upload image for new copy
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPostcopies = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Upload a file to the given thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPostfiles = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Like a thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPostlikes = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Publish a thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPostpublish = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Watch/unwatch a Thing
 *
 * id String
 * no response value expected for this operation
 **/
exports.thingsPosttogglewatch = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};
