//var nrfuart = require('/home/pi/MagicMirror/modules/bleEchoTst/index.js');	
module.exports = NodeHelper.create({
  start: function () {
    console.log('BLE helper started ...');
},

socketNotificationReceived: function(notification, payload) {
        if (notification === 'TEMP') {
            console.log('Notification TEMP in ' + this.name + ' received');
          this.sendNotificationTest(this.anotherFunction());	
        }
	else
	{
	console.log('ERRRRROR');
	}
},

sendNotificationTest:function(payload){
this.sendSocketNotification('TEMPER',payload);
},

anotherFunction: function(){
var nrfuart = require('/home/pi/MagicMirror/modules/bleEchoTst/index.js');	
console.log('1');
	nrfuart.discoverAll(function(ble_uart) {
    	//'use strict';
console.log('2');
    	ble_uart.on('disconnect', function() {});
console.log('3');
    	ble_uart.connectAndSetup(function() {
        	var writeCount = 0;
console.log('4');        	
ble_uart.readDeviceName(function(devName) {});
console.log('5');        	
ble_uart.on('data', function(data) {
		var x = data.toString();
		var con = x.substring(0,2);
		var dec = x.substring(2,4);
		con = con.concat('.');
		con = con.concat(dec);
		console.log(con);
		return con;		 		
});
        setInterval(function() {}, 3000);
    });
});
}	

});