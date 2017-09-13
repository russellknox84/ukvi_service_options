'use strict';

module.exports = superclass => class extends superclass {
    saveValues(req, res, callback) {
      req.sessionModel.reset();
      super.successHandler(req, res, callback);
    }
  };