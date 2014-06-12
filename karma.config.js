module.exports = function (config) {
    'use strict';
 
    config.set({
        // Welche Test-Frameworks sollen verwendet werden?
        frameworks: [
            'jasmine'
        ],
 
        // Welche Dateien sollen f�r die Tests in die Browser geladen werden?
        files: [
            '\BasicProject\MvcAngular.Web\Scripts\app\app.js',
            '\BasicProject\MvcAngular.Web\test\unit*.spec.js'
        ],
 
        // Welche Datein sollen nicht geladen werden?
        exclude: [],
 
        // Welcher "Reporter" soll verwendet werden?
        // M�gliche Werte sind: 'dots', 'progress', 'junit', 'growl', 'coverage'
		   reporters: ['dots', 'junit'],
		  
			junitReporter: {
		  outputFile: 'test-results.xml'
		},
 
        // Log Level.
        // M�gliche Werte sind: LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
        logLevel: config.LOG_INFO,
 
        // Browser einbinden.
        // M�glich sind:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (nur f�r Mac)
        // - PhantomJS
        // - IE (nur f�r Windows)
        browsers: [
            'PhantomJS',
            'Chrome',
            'Firefox'
        ],
 
        // Aktiviert/deaktiviert das automatische Ausf�hren der Tests, wenn sich eine Datei �ndert.
        autoWatch: true,
    });
};