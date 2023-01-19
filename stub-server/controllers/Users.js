'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.usersDelete = function usersDelete (req, res, next, username) {
  Users.usersDelete(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersDeletefollowers = function usersDeletefollowers (req, res, next, username) {
  Users.usersDeletefollowers(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGet = function usersGet (req, res, next, username) {
  Users.usersGet(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetallcollectedthings = function usersGetallcollectedthings (req, res, next, username) {
  Users.usersGetallcollectedthings(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetcollections = function usersGetcollections (req, res, next, username, all) {
  Users.usersGetcollections(username, all)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetcopies = function usersGetcopies (req, res, next, username) {
  Users.usersGetcopies(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetdownloads = function usersGetdownloads (req, res, next, username) {
  Users.usersGetdownloads(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGeteventcount = function usersGeteventcount (req, res, next, username) {
  Users.usersGeteventcount(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetfavorites = function usersGetfavorites (req, res, next, username) {
  Users.usersGetfavorites(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetlikes = function usersGetlikes (req, res, next, username) {
  Users.usersGetlikes(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetsearch = function usersGetsearch (req, res, next, username, term) {
  Users.usersGetsearch(username, term)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetthings = function usersGetthings (req, res, next, username) {
  Users.usersGetthings(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetunreadmessagecount = function usersGetunreadmessagecount (req, res, next) {
  Users.usersGetunreadmessagecount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPatch = function usersPatch (req, res, next, username) {
  Users.usersPatch(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPostavatarimage = function usersPostavatarimage (req, res, next, username) {
  Users.usersPostavatarimage(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPostcoverimage = function usersPostcoverimage (req, res, next, username) {
  Users.usersPostcoverimage(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPostfollowers = function usersPostfollowers (req, res, next, username) {
  Users.usersPostfollowers(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPostverifyaccount = function usersPostverifyaccount (req, res, next, username) {
  Users.usersPostverifyaccount(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
