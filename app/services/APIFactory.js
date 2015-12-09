'use strict'

var HTMLParser = require('simple-html-parser')

var APIFactory = function($http, $q) {

  function getArrests() {
    console.log('APIFactory::getArrested()')
    return $http({
      method: 'GET',
      url: 'https://dl.dropboxusercontent.com/u/90195183/londonterror/data.json'
    })
  }

  function getNews() {
    var deferred = $q.defer()

    $http({
      method: 'GET',
      url: 'https://www.google.co.uk/search?tbm=nws&q=Terrorism%20london%20arrest'
    }).then(
      // Success
      function(resp) {

        // Parse
        var parser = new DOMParser()
        var html = parser.parseFromString(resp.data, "text/html")

        var sel = html.querySelectorAll('.r')

        var result = []

        result.forEach.call(sel, function(v) {
          var aElem = v.childNodes[0] // html is not a DOM tree
          result.push({
            name: aElem.innerText,
            url: aElem.getAttribute('href')
          })
        })
        deferred.resolve(result)
      },
      // Fail
      function (err) {
        deferred.reject(err)
      }
    )
      return deferred.promise

  }

  return {
    getArrests: getArrests,
    getNews: getNews
  }
}

module.exports = APIFactory
