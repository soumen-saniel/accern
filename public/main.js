require.config({
    waitSeconds: 200,
    paths : {
        'jquery': 'bower_components/foundation/js/vendor/jquery',
        'fastclick': 'bower_components/fastclick/lib/fastclick',
        'jquery-placeholder': 'bower_components/jquery-placeholder/jquery.placeholder',
        'jquery.cookie': 'bower_components/jquery.cookie/jquery.cookie',
        'foundation': 'bower_components/foundation/js/foundation',
        
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'coreModule': 'app-scripts/coreModule'
    },
    shim : {
        'foundation': {
            deps : ['fastclick', 'jquery-placeholder', 'jquery.cookie']
        },
        'angular' : {
			deps : ['jquery']
		},
		'angular-route' : {
			deps : ['angular']
		},
		'angular-ui-router' : {
			deps : ['angular']
		},
        'coreModule' : {
			deps : ['angular-route' , 'angular-ui-router']
		}
    }
});

require(['coreModule'], function(){

});