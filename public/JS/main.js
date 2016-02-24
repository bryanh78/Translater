angular.module('Translate', [])

angular.module('Translate')
	.controller('GTController', ['$scope', '$http', function($scope, $http){
		var s = $scope
		var h = $http

		s.createTranslation = function(){
			h.post('/api/translation', s.newTranslation).then(function(returnData) {
				s.newTranslation = returnData.data
			})
		}

	}]);

angular.module('Translate')
	.controller('QuizController', ['$scope','$http', function($scope,$http){
		var s = $scope

	
	}]);

angular.module('Translate')
	.controller('ProgressController', ['$scope','$http', function($scope,$http){
		var s = $scope

	
	}]);