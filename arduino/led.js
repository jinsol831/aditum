var SerialPort = require('serialport');
var serialPort = new SerialPort('COM4', {
        baudRate: 9600
    });

// these are the definitions for the serial events:

 
function openPort() {
    serialPort.on('open', openPort); // called when the serial port opens

    var brightness = 'H'; // the brightness to send for the LED
    console.log('port open');
    //console.log('baud rate: ' + SerialPort.options.baudRate);
 
    // since you only send data when the port is open, this function
    // is local to the openPort() function:
    function sendData() {
         // convert the value to an ASCII string before sending it:
         serialPort.write(brightness.toString());
         console.log('Sending ' + brightness + ' out the serial port');
    }
    // set an interval to update the brightness 2 times per second:
    //setInterval(sendData, 1500);

    var x = 0;
    var intervalID = setInterval(function () {

        // Your logic here
        sendData();

        if (++x === 2) {
            clearInterval(intervalID);
        }
    }, 1000);
}

openPort();