/**
 * Created by HocSoiCa on 5/10/2016.
 */
var async = require('async');
module.exports = function (app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;

  //create all models
  async.parallel({
    tracking: async.apply(createTracking)
  }, function (err, results) {
    if (err) throw err;
    console.log(results);
  });

  //create Tracking
  function createTracking(cb) {
    mysqlDs.autoupdate('tracking', function (err) {
      if (err) return cb(err);
      console.log("Create Tracking Model Successfully");
    });
  }
};


