angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $http) {

	$http.get('http://staging.activelifeadmin.com/dummy/websearch/public/index/getscheduleslist?branch_ids=3').then(function(resp) {
	    console.log('Success', resp);
	    // For JSON responses, resp.data contains the result
	    $scope.programs = resp.data;
	  }, function(err) {
	    console.error('ERR', err);
	    // err.status will contain the status code
	  })


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', ['$cordovaGeolocation', function($scope) {
	$ionicPlatform.ready(function() {
		var posOptions = {timeout: 20000, enableHighAccuracy: true};
		  $cordovaGeolocation.getCurrentPosition(posOptions)
		            .then(function(position){
		                var lat  = position.coords.latitude
		                var long = position.coords.longitude
		                $scope.lat = lat;
					  	$scope.lng = lng;
		                console.log('lat', lat);
		                console.log('long', long);  
		            }, function(error){
		                console.log('error:', error);
		            });
     });
}]);

// .controller('AccountCtrl', ['$cordovaGeolocation', InfoController]);

//     function InfoController($cordovaGeolocation) {
//         var vm = this;
//         var posOptions = {timeout: 20000, enableHighAccuracy: true}

//         vm.where = function(){
//             $cordovaGeolocation.getCurrentPosition(posOptions)
//             .then(function(position){
//                 var lat  = position.coords.latitude
//                 var lng = position.coords.longitude


// 				var geocoder = new google.maps.Geocoder();
// 			    var latlng = new google.maps.LatLng(lat, lng);
// 				    geocoder.geocode({'latLng': latlng}, function(results, status) {
// 				      if (status == google.maps.GeocoderStatus.OK) {
// 				      console.log(results)
// 				        if (results[1]) {
// 				         //formatted address
				         
// 				        //find country name
// 				             for (var i=0; i<results[0].address_components.length; i++) {
// 				            for (var b=0;b<results[0].address_components[i].types.length;b++) {

// 				            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
// 				                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
// 				                    //this is the object you are looking for
// 				                    city= results[0].address_components[i];
// 				                    break;
// 				                }
// 				            }
// 				        }
// 				        //city data
// 				        console.log(results[0].formatted_address + city.short_name + " " + city.long_name);

// 				        } else {
// 				          alert("No results found");
// 				        }
// 				      } else {
// 				        alert("Geocoder failed due to: " + status);
// 				      }

//     			});


// 				console.log(vm);

//                 console.log('lat', lat);
//                 console.log('long', lng);  
//             }, function(error){
//                 console.log('error:', error);
//             });

//         };
//     };
