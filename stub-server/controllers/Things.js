'use strict';

var utils = require('../utils/writer.js');
var Things = require('../service/ThingsService');

module.exports.thingsDelete = function thingsDelete (req, res, next, id) {
  Things.thingsDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsDeletefiles = function thingsDeletefiles (req, res, next, id, file_id) {
  Things.thingsDeletefiles(id, file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsDeleteimages = function thingsDeleteimages (req, res, next, id, image_id) {
  Things.thingsDeleteimages(id, image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsDeletelikes = function thingsDeletelikes (req, res, next, id) {
  Things.thingsDeletelikes(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGet = function thingsGet (req, res, next, id) {
  Things.thingsGet(id)
    .then(function (response) {
      
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetancestors = function thingsGetancestors (req, res, next, id) {
  Things.thingsGetancestors(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetcategories = function thingsGetcategories (req, res, next, id) {
  Things.thingsGetcategories(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetcomments = function thingsGetcomments (req, res, next, id) {
  Things.thingsGetcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetcopies = function thingsGetcopies (req, res, next, id) {
  Things.thingsGetcopies(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetderivatives = function thingsGetderivatives (req, res, next, id) {
  Things.thingsGetderivatives(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetfiles = function thingsGetfiles (req, res, next, id, file_id) {
  Things.thingsGetfiles(id, file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetimages = function thingsGetimages (req, res, next, id, image_id) {
  Things.thingsGetimages(id, image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetlikes = function thingsGetlikes (req, res, next, id) {
  Things.thingsGetlikes(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetprints = function thingsGetprints (req, res, next, id) {
  Things.thingsGetprints(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetrootcomments = function thingsGetrootcomments (req, res, next, id) {
  Things.thingsGetrootcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGettags = function thingsGettags (req, res, next, id) {
  Things.thingsGettags(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsGetthreadedcomments = function thingsGetthreadedcomments (req, res, next, id) {
  Things.thingsGetthreadedcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPatch = function thingsPatch (req, res, next, id) {
  Things.thingsPatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPatchimages = function thingsPatchimages (req, res, next, id, image_id) {
  Things.thingsPatchimages(id, image_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPost = function thingsPost (req, res, next) {
  Things.thingsPost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPostcomments = function thingsPostcomments (req, res, next, id) {
  Things.thingsPostcomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPostcopies = function thingsPostcopies (req, res, next, id) {
  Things.thingsPostcopies(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPostfiles = function thingsPostfiles (req, res, next, id) {
  Things.thingsPostfiles(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPostlikes = function thingsPostlikes (req, res, next, id) {
  Things.thingsPostlikes(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPostpublish = function thingsPostpublish (req, res, next, id) {
  Things.thingsPostpublish(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.thingsPosttogglewatch = function thingsPosttogglewatch (req, res, next, id) {
  Things.thingsPosttogglewatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
