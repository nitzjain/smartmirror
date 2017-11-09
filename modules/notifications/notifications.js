var awake = 1;
Module.register("notification",{

	// Default module config.
	defaults: {
		text: "",
		animationSpeed: 500,
	},
	start: function() { 
        this.sendSocketNotification("CONNECT", {});
    },

	notificationReceived: function(notification, callback) {
		var self = this;
				if (notification === "go_to_sleep" && awake === 1){
            		this.config.text = "going to sleep...";
					this.updateDom(this.config.animationSpeed);
					setTimeout(function(){
						self.sendSocketNotification('go_to_sleep', {});
						self.config.text = "";
						self.updateDom(self.config.animationSpeed);
					}, 1000);
					awake = 0;
					callback(awake);
        		}
				if (notification === "wake_up" && awake === 0){
					this.sendSocketNotification('wake_up', {});
            		this.config.text = "waking up...";
					this.updateDom(this.config.animationSpeed);
					setTimeout(function(){
						self.config.text = "";
						self.updateDom(self.config.animationSpeed);
					}, 5000);
					awake = 1;
					callback(awake);
        		}
    },
	socketNotificationReceived: function(notification) {
   if (notification === "autosleep") {
					awake = 0;
        		}
   	},
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});