'use strict';

var utils = require('../utils/writer.js');
var Groups = require('../service/GroupsService');

module.exports.groupsDelete = function groupsDelete (req, res, next, id) {
  Groups.groupsDelete(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsDeletemembers = function groupsDeletemembers (req, res, next, group_id, user_id) {
  Groups.groupsDeletemembers(group_id, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsDeletethings = function groupsDeletethings (req, res, next, id, thing_id) {
  Groups.groupsDeletethings(id, thing_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGet = function groupsGet (req, res, next, id) {
  Groups.groupsGet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetgroupforums = function groupsGetgroupforums (req, res, next, id) {
  Groups.groupsGetgroupforums(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetgrouptopics = function groupsGetgrouptopics (req, res, next, id) {
  Groups.groupsGetgrouptopics(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetgrouptopicscomments = function groupsGetgrouptopicscomments (req, res, next, id) {
  Groups.groupsGetgrouptopicscomments(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetisslugunique = function groupsGetisslugunique (req, res, next, slug) {
  Groups.groupsGetisslugunique(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetmembers = function groupsGetmembers (req, res, next, id) {
  Groups.groupsGetmembers(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetthings = function groupsGetthings (req, res, next, id) {
  Groups.groupsGetthings(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGetuseringroup = function groupsGetuseringroup (req, res, next, slug, userId) {
  Groups.groupsGetuseringroup(slug, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPatch = function groupsPatch (req, res, next, id) {
  Groups.groupsPatch(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPatchthings = function groupsPatchthings (req, res, next, id, thing_id) {
  Groups.groupsPatchthings(id, thing_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPost = function groupsPost (req, res, next) {
  Groups.groupsPost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPostgroupforums = function groupsPostgroupforums (req, res, next, id) {
  Groups.groupsPostgroupforums(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPostgrouptopics = function groupsPostgrouptopics (req, res, next, id) {
  Groups.groupsPostgrouptopics(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPostimage = function groupsPostimage (req, res, next, id) {
  Groups.groupsPostimage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPostmembers = function groupsPostmembers (req, res, next, group_id) {
  Groups.groupsPostmembers(group_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPostthings = function groupsPostthings (req, res, next, id, thing_id) {
  Groups.groupsPostthings(id, thing_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
