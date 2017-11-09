
var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
/*		{
			module: 'helloworld',
			position: "middle_center"
				
},
*/		
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
/*		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'New York',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: 'YOUR_OPENWEATHER_API_KEY'
			}
		},*/
			{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'San Jose',
				locationID: '5392171',  //ID from http://www.openweathermap.org
				appid: '69af74d638a8d3c02d8ea2be2143593f'
			}
		},
	/*	{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
	module: 'MMM-Traffic',
	position: 'top_center',
	classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
	config: {
		api_key: 'AIzaSyBYFn4ujxknhaYfa99Ea462rlOLUZRRRoc',
		mode: 'driving',
		origin: '1649 Willow Lake Lane, San Jose 95131',
		destination: '32732 BelAire Ct., Union City 98754',
		arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
		route_name: 'Home to Work',
		changeColor: true,
		showGreen: false,
		limitYellow: 5, //Greater than 5% of journey time due to traffic
		limitRed: 20, //Greater than 20% of journey time due to traffic
		traffic_model: 'pessimistic',
		interval: 120000, //2 minutes
		showWeekend: false,
		allTime: false
		}
		},	
		{			
                      module: 'maproute',
                      position: 'middle_center',
                      config: {}
		},
		{
                      module: 'bleEchoTst',
                      position: 'middle_center',
                      config: {}
		},*/
		{
   			module: 'voicecontrol',
   			position: 'middle_center',
   			config: {
       			 models: [
                    {
                        keyword: "gotosleep",   // keyword 
                        file: "gotosleep.pmdl", // trained model file name
                        message: "go_to_sleep"   // notification message that's broadcast in the MagicMirror app
                    },
					{
                        keyword: "wake up",   // keyword 
                        file: "Wake_up.pmdl", // trained model file name
                        message: "wake_up"   // notification message that's broadcast in the MagicMirror app
                    },
                    {
                        keyword: "play music",   // keyword 
                        file: "play_music.pmdl", // trained model file name
                        message: "PLAY"   // notification message that's broadcast in the MagicMirror app
                    },
 		    {
                        keyword: "stop music",   // keyword 
                        file: "stop_music.pmdl", // trained model file name
                        message: "STOP"   // notification message that's broadcast in the MagicMirror app
                    },
		    {
						keyword: "play video",   // keyword 
						description: "Say 'Play Video' to start playing",
						file: "play video.pmdl", // trained model file name
						message: "PLAY_VIDEO"   // notification message that's broadcast in the MagicMirror app
   		    },
			{
				keyword: "Show Camera",
				description: "Say 'Show Camera' to display camera",
				file: "showCamera.pmdl",
				message: "SHOW_CAMERA"
			},
			{
				keyword: "Hide Camera",
				description: "Say 'Hide Camera' to hide camera",
				file: "hideCamera.pmdl",
				message: "HIDE_CAMERA"
			},
			{
				keyword: "Selfie",
				description: "Say 'Selfie' when camera is visible",
				file: "selfie.pmdl",
				message: "SELFIE"
			},

		]
	},





	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
