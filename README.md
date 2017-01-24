# accern
Accern web development task
## Description
This page is a replica of www.accern.com.
The website is a single page web application made in Angular Js. The server is created in Node JS with Express. It also has _Zendesk_ widget embadded in it.

## Technology stack
1. Client side library manager - Bower.
2. UI framework - ZURB Foundation 5.5.3
3. Fonts - Google fonts Poppins|Roboto
4. Font icons - Fontawesome
5. Javascript library - Jquery 3.1.1
6. Javascript framework - Angular 1.6.1
7. Routing module - ui-router 0.4.2
8. Script manager/ dependency manager - Require JS 2.3.2
9. Zendesk widget.

## Folder structure
<ul>
<li>node_modules</li>
<li>public</li>
<ul>
<li>bower_components</li>
<li>app-styles</li>
<li>app-scripts</li>
<ul>
<li>config</li>
<li>controllers</li>
<li>directives</li>
<li>appReferences.js</li>
<li>coreModule.js</li>
</ul>
<li>views</li>
<ul>
<li>home.html</li>
<li>company.html</li>
<li>resource.html</li>
<li>contact.html</li>
</ul>
<li>img</li>
<li>bower.json</li>
<li>main.js</li>
<li>index.html</li>
</ul>
<li>package.json</li>
<li>README.md</li>
<li>server.js</li>
</ul>
The _public_ folder contains all the client side code which is hosted as static resource by Express.

The _public_ folder contains _bower_components_, _app-styles_, _app-scripts_, _views_ and _img_ folders.

_bower_components_ has got all the client side libraries.

_app-styles_ has got the custom CSS files.

_views_ has the partial HTML pages for different routes.

_app-scripts_ has all the angular components in different folders _config_, _controllers_ and _directives_.

_config_ has got the config file for ui-routes.

_controllers_ has got the angular controllers.

_directives_ has got the angular directives.

## Application flow
The entry point to the client application is _index.html_ which acts as the master page for our application. It has got the navigation bar, ui-view (to include the partial templates) and the footer.

The _index.html_ has got the script for Zendesk widget in the header and reference to the require.js with data-main as main.js file (main.js holds configuration for require.js).

_main.js_ is the entry point for Angular _coreModule_, holds reference to the script files and define the dependencies.
### main.js
```javascript
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
```
The _coreModule.js_ defines the angular module and bootstraps angular to the document taking the angular componets referenced in _public/app-scripts/appReferences.js_.
### coreModule.js
```javascript
define(function(){
    //Core Module
    var coreModule = angular.module("coreModule",["ngRoute", "ui.router"]);
	//Loading all angular components defined in appReferences file
	require(['app-scripts/appReferences'], function(references) {
		require(references, function(){
			//Bootstraping angular to the document
			angular.bootstrap(document, ["coreModule"]);
		});
	});
})
```
### appReferences.js
```javascript
//Path to the angular components are referenced here
define(function(){
	return [
		'app-scripts/config/appConfig',
        'app-scripts/controllers/mainController',
        'app-scripts/directives/appDirective'
	];
});
```
