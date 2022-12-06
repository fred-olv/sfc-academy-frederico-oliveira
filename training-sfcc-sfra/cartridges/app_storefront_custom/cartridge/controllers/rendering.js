'use strict';

var server = require('server');

server.get('rendering', function (req, res, next) {
    res.render('/templates/default/servide');
    next();
});



module.exports = server.exports();
