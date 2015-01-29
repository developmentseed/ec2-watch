'use strict';

var AWS = require('aws-sdk');
var moment = require('moment');

AWS.config.loadFromPath('./config.json');

var ec2 = new AWS.EC2();
var params = {};
var getInstances = function (ascending, cb) {
  ec2.describeInstances(params, function(err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
      return cb(err);
    }
    
    // Collect instances
    var instances = [];
    for (var i = 0; i < data.Reservations.length; i++) {
      instances.push(data.Reservations[i].Instances);
    }

    // Sort by date and reverse if necessary
    instances.sort(function(a, b) {
      return moment(a[0].LaunchTime) - moment(b[0].LaunchTime);
    });
    if (ascending) {
      instances.reverse();
    }

    if (cb && typeof(cb) === 'function') {
      return cb(null, instances);
    }
  });
};

module.exports = getInstances;