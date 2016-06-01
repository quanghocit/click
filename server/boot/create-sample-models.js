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
    city: async.apply(createCity),
    category: async.apply(createCategory),
    location: async.apply(createLocation)

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

  function createCity(cb) {
    mysqlDs.automigrate('city', function (err) {
      if (err) return cb(err);
      var City = app.models.city;
      City.create([
        {city: 'Hồ Chí Minh', categoryId: '{"data":["2","4"]}'},
        {city: 'Hà Nội', categoryId: '{"data":["5","2"]}'}
      ], cb);
      console.log("Create City Model Successfully");
    });
  }

  function createCategory(cb) {
    mysqlDs.automigrate('category', function (err) {
      if (err) return cb(err);
      var Category = app.models.category;
      Category.create([
        {id: 1, category: 'Public Areas'},
        {id: 2, category: 'Coffee Shops'},
        {id: 3, category: 'Malls'},
        {id: 4, category: 'Universities'},
        {id: 5, category: 'Airports'},
        {id: 6, category: 'Train & Bus Stations'},
        {id: 7, category: 'Hopitals'}
      ], cb);
      console.log("Create Category Model Successfully");
    });
  }

  function createLocation(cb) {
    mysqlDs.automigrate('location', function (err) {
      if (err) return cb(err);
      var Location = app.models.location;
      Location.create([
        {location: 'Airport Nội Bài T1', categoryId: '5', cityId: '2'},
        {location: 'Airport Nội Bài T2', categoryId: '5', cityId: '2'},
        {location: 'Starbuck Hàng Mã', categoryId: '2', cityId: '2'},
        {location: 'Starbuck Bitexco', categoryId: '2', cityId: '1'},
        {location: 'ĐH CNTT', categoryId: '4', cityId: '1'},

      ], cb);
      console.log("Create Location Model Successfully");
    });
  }
}


