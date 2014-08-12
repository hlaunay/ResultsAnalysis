ResultsAnalysis
===============

Web application made to analyse sports results and display statistics

This application is made for Google App Engine.

#Requirements

* Java 1.7
* Maven >= 3.1

#Build

    $ cd ResultAnalysis/
    $ mvn clean install
    $ cd resultanalysis-ear
    $ mvn appengine:devserver
    
#Deploy

    $ cd resultanalysis-ear
    $ mvn appengine:update
    
#Architecture

This web application front end use following frameworks : 

* [Angular.js](https://angularjs.org/)
* [Twitter Bootstrap](http://getbootstrap.com/)
* [JQuery](http://jquery.com/)

Web application back end is full java code using [Google App Engine](https://developers.google.com/appengine/) API.