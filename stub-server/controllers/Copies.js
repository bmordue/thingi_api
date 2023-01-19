'use strict';

var utils = require('../utils/writer.js');
var Copies = require('../service/CopiesService');

module.exports.copiesDelete = function copiesDelete (req, res, next, id) {
  Copies.copiesDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesDeleteimages = function copiesDeleteimages (req, res, next, id, image_id) {
  Copies.copiesDeleteimages(id, image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesDeletelikes = function copiesDeletelikes (req, res, next, id) {
  Copies.copiesDeletelikes(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesGet = function copiesGet (req, res, next, id) {
  Copies.copiesGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesGetcomments = function copiesGetcomments (req, res, next, id) {
  Copies.copiesGetcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesGetimages = function copiesGetimages (req, res, next, id) {
  Copies.copiesGetimages(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesGetrootcomments = function copiesGetrootcomments (req, res, next, id) {
  Copies.copiesGetrootcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesGetthreadedcomments = function copiesGetthreadedcomments (req, res, next, id) {
  Copies.copiesGetthreadedcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesPatch = function copiesPatch (req, res, next, id) {
  Copies.copiesPatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesPatchimages = function copiesPatchimages (req, res, next, id, image_id) {
  Copies.copiesPatchimages(id, image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesPostcomments = function copiesPostcomments (req, res, next, id) {
  Copies.copiesPostcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesPostimages = function copiesPostimages (req, res, next, id) {
  Copies.copiesPostimages(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.copiesPostlikes = function copiesPostlikes (req, res, next, id) {
  Copies.copiesPostlikes(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
