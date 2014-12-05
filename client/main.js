/*globals require, window, $, Connection*/

require({
	paths: {
		underscore: "thirdParty/underscore-1.6.0",
		jquery: "thirdParty/jquery-2.0.3",
		jquerymobileconfig: "thirdParty/jquery.mobile.config",
		jquerymobile: "thirdParty/jquery.mobile-1.4.3"
	},
	map: {
		"*": {
			text: "thirdParty/text",
			css: "thirdParty/require-css/css"
		}
	},
	shim: {
		jquerymobileconfig: {
			deps: ["jquery"]
		},
		jquerymobile: {
			deps: ["jquerymobileconfig"],
			exports: 'jquery'
		}
	},
	urlArgs: "bust=" + (new Date()).getTime()
}, [
	"jquery",
	"underscore",
	"jquerymobile",
	"jquerymobileconfig",
	"css!thirdParty/jquery.mobile-1.4.3.css"
], function (
	$,
	_
) {
	// don't forget to trigger JQM manually
	if ($.mobile.autoInitializePage == false) {
		$.mobile.initializePage();
	}


});