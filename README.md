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

The _index.html_ has got the script for Zendesk widget in the header and refference to the require.js with data-main as main.js file (main.js holds configuration for require.js).

