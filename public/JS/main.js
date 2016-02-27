angular.module('Translate', [])

angular.module('Translate')
	.controller('GTController', ['$scope', '$http', function($scope, $http){
		var s = $scope
		var h = $http

		s.createTranslation = function(newTranslation){
			h.post('/api/translation', newTranslation)
				.then(function(returnData) {
				console.log(returnData)
				s.words = returnData.data
			})
		}


	}]);

angular.module('Translate')
	.controller('ProgressController', ['$scope','$http', function($scope,$http){
		var s = $scope

	
	}]);