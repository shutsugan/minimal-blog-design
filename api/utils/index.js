'use strict';

module.exports = {
  jsonResponse: (res, status, content) => {
    res.status(status);
    return res.json(content);
  }
}
