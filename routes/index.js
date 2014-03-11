var request = require('request');
var async = require('async');

//home page 
exports.index = function(req, res) {
  res.render('index', { title: 'BTC_dashboard' });
};

//api call
exports.api= function(req, res) {
  async.parallel({
    CAD: function(callback) {
      request('https://api.bitcoinaverage.com/ticker/global/CAD/last', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          callback(null, body);
        }
      });
    },
    BRL: function(callback) {
      request('https://api.bitcoinaverage.com/ticker/global/BRL/last', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          callback(null, body);
        }
      });
    }, 
    time: function(callback) {
      callback(null, getDateTime());
    }
  },
  function(err, results) {
    res.send(results);
  });
};

function getDateTime(){
  var date = new Date();
  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;
  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;
  return hour + ":" + min + ":" + sec;
}