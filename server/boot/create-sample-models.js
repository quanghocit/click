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
    users: async.apply(createUsers)
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

  function createUsers(cb) {
    mysqlDs.automigrate('users', function (err) {
      if (err) return cb(err);
      var Users = app.models.users;
      Users.create({
        email: 'hoc@gmail.com', password: '123456'},
        function(err, users) {
          console.log(users);
      });
      console.log("Create Users Model Successfully");
    });
  }

  //create Person
  //function createPerson(cb) {
  //  mysqlDs.automigrate('person', function (err) {
  //    if (err) return cb(err);
  //    var Person = app.models.person;
  //    Person.create([
  //      {firstname: 'Hoc', lastname: 'Nguyen'},
  //      {firstname: 'Anh', lastname: 'Vy'},
  //      {firstname: 'Phuc', lastname: 'Le'}
  //    ], cb);
  //  });
  //}
};


