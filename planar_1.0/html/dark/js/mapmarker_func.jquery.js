$(document).ready(function(){
	
		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "39.118331", "longitude":"-84.442279", "icon": "img/map-marker.png", "baloon_text": '<strong>PLANAR</strong> 3314 Walworth Ave ,Cincinnati, OH. 45226, United States, US'}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 11,
			center	: '3314 Walworth Ave ,Cincinnati, OH. 45226, United States',
			markers	: myMarkers
		});

	});