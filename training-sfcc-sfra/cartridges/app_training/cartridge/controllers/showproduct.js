'use strick';

var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get("show", function (req, res, next) {
    var Product = ProductMgr.getProduto("256886395M");
    res.render("vartest/vartest", {Product:Product})
    return next();
}
);
module.exports = server.exports();