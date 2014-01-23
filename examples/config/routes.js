
/**
 * Routing Configuration
 */

var fileJSON = require('../json/mock.json');

module.exports = function(app) {

    app.get('/json', function(req, res) {
        res.json({data: fileJSON});
    });

};
