/* global angular */
/* https://github.com/robjames/rjTickbox */
angular.module('rjTickbox', [])
.directive('tickbox', ['$timeout',function($timeout){
	return {
		restrict: 'C',
		link: function(scope, element, attrs){
			element.on('change', function(){
				var checked = (!!element.prop('checked')) ? true : false;
				element.parent().removeClass((!checked).toString().toUpperCase()).addClass(checked.toString().toUpperCase());
			});
			$timeout(function(){
				element.triggerHandler('change');
				element.parent().addClass('tickbox');
			}, 0);
		}
	};
}]);