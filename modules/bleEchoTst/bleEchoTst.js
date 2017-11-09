Module.register("bleEchoTst",{
	temper: '999',
	defaults: {
	text: '100'
	},

	start: function() {
	this.temper = this.config.text;
	this.sendSocketNotification('TEMP',this.config);
	},

	socketNotificationReceived: function(notification,payload)
	{
	if(notification === 'TEMPER')
	{
	this.temper = payload;
	//this.temper = '999';
	this.updateDom();
	}
	},

        // Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.temper;
		return wrapper;
	}

});



