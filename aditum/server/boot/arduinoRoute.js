//import ardunio

var arduino = require('../arduino.js');


  module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.get('/api/arduino', function(req, res) {

         arduino.scan().then(function(value){
            res.send(value)
         })

  
    });
  }