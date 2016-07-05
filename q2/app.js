var mod = angular.module("cache", []);
    	mod.controller("controller", function($scope, $cacheFactory){
    	$scope.keys = [];
    	$scope.cache = $cacheFactory('cacheId');
    	$scope.put = function(key, value){
    		if(angular.isUndefined($scope.cache.get(key))){
    			$scope.cache.put(key,value);
    			$scope.keys.push(key);
    		}

    	}
    	});