//Simple arduino emulator

//Global variables
var pwStat = true;

//Call back functions
Power(pwStat);

//Power function
function Power(pwStat){
    lPower = pwStat;
    if(lPower == true){
        console.log("Arduino is ON");
        arduPorts();
    }else{
        console.log("Please turn to ON your device");
    }
};

function arduPorts(){
    //Init number of avaliables ports
    var portArr = []; //Array of ports
    portArr.push(true);
    portArr.push(true);
    portArr.push(true);
    
    n = 1; //Init port count
    for(var i=0; i<portArr.length; i++){
        nRes = n++;
        console.log("Avaliable " + nRes + " ports.");
    }
    if(nRes>1){
        console.log("You have avaliable ports");
        portInit(nRes);
    }else{
        console.log("Unfortunatelly ports not avaliable");
    }
}

function portInit(nRes){
    var initPorts = [];
    aPorts = nRes;
    console.log("Initialization ports... " + aPorts);
    for(var i=0; i<aPorts; i++){
        initPorts.push("Port is init like a " + i);
    }
    for(var i=0; i<initPorts.length; i++){
        console.log(initPorts[i]);
    }
}