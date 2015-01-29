'use strict';

var moment = require('moment');

var getInstances = require('./lib/ec2.js');

var ascending = true;
getInstances(ascending, function (err, instances) {
  if (err) {
    return console.log(err);
  }

  console.log('-----------------------------------');
  console.log('--- Goooooood Moooooorning AWS! ---');
  console.log('-----------------------------------');
  for (var i = 0; i < instances.length; i++) {
    var instance = instances[i][0];
    var timeSinceStart = moment(instance.LaunchTime).from(moment());
    console.log(instance.InstanceId + ' is a ' + instance.InstanceType +
      ' that has been running since ' + timeSinceStart + '.');
  }
  console.log('-----------------------------------');
});