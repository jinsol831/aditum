//List of serial port's
var serialport = require("serialport");
serialport.list(function(err, ports) {
    console.log(ports);
});