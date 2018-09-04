function arduLogic(){
var SerialPort = require('serialport');
var serialPort = new SerialPort('COM7', {
        baudRate: 9600
    });

function rfidReader(){    
    // Switches the port into "flowing mode"
    serialPort.on('data', function (data) {
        serialPort.write("E");
        //Convert HEX data to String
        function hex2a(hexx) {
            var hex = hexx.toString(); //force conversion
            return hex;
            console.log('Data ASCII:', hex);
            //Check for the correct type a connected device (if first answer is equal to 1100, device is RFID ready)
            if (hex == 1100) {
                console.log("RFID reader is ready for using... Please touch RFID TAG.");
            } else if (hex != null) { //Else we have other information
                aControlTest(hex); //Call back simple test function with UID card number
            } else {
                console.log("Device not found... Please check connection or replug device.");
            }
        }
        hex2a(data);
        //console.log('Data HEX:', data);
    });

    // Read data that is available but keep the stream from entering //"flowing mode"
    serialPort.on('readable', function () {
        console.log('Data HEX:', port.read());
    });
}

//List of serial port's
//var serialport = require("serialport");
//serialport.list(function(err, ports) {
//    console.log(ports);
//});



//Simple function for working with card UID
function aControlTest(hex){
    var UID = hex;
    if (UID == 23507||UID == 16643){ //Hardcode key valur (Please never doing like this!!!)
        var i = 0;
        for(i=0; i<2; i++){
            console.log("RFID TAG#", UID);
            console.log("DOOR IS OPEN!");
        }
    }else{
        console.log("RFID TAG#", UID);
        console.log("ACCESS DENIED!");
    }
  }
}

//Export function to new project
module.exports = {
    scan: arduLogic()
 }