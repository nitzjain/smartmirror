Module.register('maproute',{
	
	defaults: {
        key: "Ah3Jmn7HDS7v5a2r5towcKAZCNfuPR4nG2VO24x0iqBCP3IOYHL6HMR60QmXBQOy",
        start: "1649 Willow Lake Lane, San Jose 95131",
        end: "32732 BelAire Ct., Union City 94587",
	},
	
	start: function() {
		Log.info('Starting module: ' + this.name);
	},

        // Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("img");
                wrapper.style = "position:center; width:400px; height:400px;";
                wrapper.src = "http://dev.virtualearth.net/REST/V1/Imagery/Map/Road/Routes?wp.0=" + this.config.start + ";46&wp.1=" + this.config.end + ";46&mapLayer=TrafficFlow&TravelMode=Driving&mapSize=600,600&key=" + this.config.key;
		return wrapper;
	}

});