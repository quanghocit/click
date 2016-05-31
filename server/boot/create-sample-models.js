/**
 * Created by HocSoiCa on 5/10/2016.
 */
var async = require('async');
module.exports = function (app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;

  //create all models
  async.parallel({
    tracking: async.apply(createTracking),
    city    : async.apply(createCity),
    category: async.apply(createCategory),
    //location: async.apply(createLocation)

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

  function createCity(cb){
    mysqlDs.automigrate('city', function (err) {
      if (err) return cb(err);
      var City = app.models.city;
      City.create([
        {city: 'Hồ Chí Minh'},
        {city: 'Hà Nội'}
      ], cb);
      console.log("Create City Model Successfully");
    });
  }

  function createCategory(cb){
    mysqlDs.automigrate('category', function (err) {
      if (err) return cb(err);
      var Category = app.models.category;
      Category.create([
        {category: 'Public Areas'},
        {category: 'Coffee Shops'},
        {category: 'Malls'},
        {category: 'Universities'},
        {category: 'Airports'},
        {category: 'Train & Bus Stations'},
        {category: 'Hopitals'}
      ], cb);
      console.log("Create Category Model Successfully");
    });
  }

  //function createLocation(cb){
  //  mysqlDs.automigrate('city', function (err) {
  //    if (err) return cb(err);
  //    var Location = app.models.location;
  //    Location.create([
  //      {city: 'Hồ Chí Minh', location: '{"data":["Starbucks New World","Starbucks NKKN"]}'},
  //      {city: 'Hà Nội', location: '{"data":["Starbucks Hàng Mã","Starbucks Hồ Gươm"]}'}
  //    ], cb);
  //    console.log("Create Location Model Successfully");
  //  });
  //}
}


