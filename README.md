[ ![Codeship Status for hlaunay/ResultsAnalysis](https://www.codeship.io/projects/051bbbd0-105c-0132-57ce-62b73368b06b/status)](https://www.codeship.io/projects/32849)


ResultsAnalysis
===============

Web application made to analyse sports results and display statistics

This application is made for Google App Engine. Watch the production 
application at [http://results-analysis.appspot.com](http://results-analysis.appspot.com/)

#Requirements

* Java 1.7
* Maven >= 3.1

#Build

    $ mvn clean install
    $ mvn appengine:devserver
    
#Deploy

    $ mvn appengine:update
    
#Architecture

This web application front end use following frameworks : 

* [Angular.js](https://angularjs.org/)
* [Twitter Bootstrap](http://getbootstrap.com/)
* [JQuery](http://jquery.com/)

Web application back end is full java code using [Google App Engine](https://developers.google.com/appengine/) API.
