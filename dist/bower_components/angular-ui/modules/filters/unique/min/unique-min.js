angular.module("ui.filters").filter("unique",function(){return function(r,n){if(n===!1)return r;if((n||angular.isUndefined(n))&&angular.isArray(r)){var u={},a=[],i=function(r){return angular.isObject(r)&&angular.isString(n)?r[n]:r};angular.forEach(r,function(r){for(var n,u=!1,e=0;e<a.length;e++)if(angular.equals(i(a[e]),i(r))){u=!0;break}u||a.push(r)}),r=a}return r}});