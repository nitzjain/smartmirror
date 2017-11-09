'use strict';
const NodeHelper = require('node_helper');
const exec = require('child_process').exec;
var timer;
//function initialize() {
//}
//(function(){
//	initialize();
//			autosleep();
//})();


module.exports = NodeHelper.create({
  start: function() {
		this.started = false;
  }, 
 
  socketNotificationReceived: function(notification) {
	if (notification === "CONNECT") {
			clearTimeout(timer);
			this.autosleep();
	}
    if (notification === 'go_to_sleep') {
            exec("/opt/vc/bin/tvservice -o", null);
			clearTimeout(timer);
	}
	if (notification === 'wake_up') {
            exec("/opt/vc/bin/tvservice -p", null);
			exec("/bin/fbset -depth 8 && /bin/fbset -depth 16 ", null);
      		exec("/usr/bin/xrefresh",null);
			clearTimeout(timer);
			this.autosleep();
	}
  },
  autosleep: function(){
	  var self = this;
	  timer=setTimeout(function(){
				exec("/opt/vc/bin/tvservice -o", null);
			    self.sendSocketNotification("autosleep", {});
			},  10*60*1000);
  }
});