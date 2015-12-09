'use strict'

require('./index.html')

var angular = require('angular')

var MainController = require('./controllers/MainController')
var APIFactory = require('./services/APIFactory')

var app = angular.module('LondonTerrorApp', [])

// Services
app.factory('APIFactory', APIFactory)
// Controllers
app.controller('MainController', MainController)
