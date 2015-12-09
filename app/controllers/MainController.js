'use strict'

var MainController = function($scope, APIFactory) {
  $scope.name = 'LondonTerror'

  $scope.onRefresh = function() {
    APIFactory.getArrests().then(
      // Success
      function(resp) {
        $scope.arrestsData = resp.data.arrests
      },
      // Fail
      function (err) {
        // TODO: Fancy error
      }
    )

    APIFactory.getNews().then(
      // Success
      function(resp) {
        $scope.newsData = resp
      },
      // Fail
      function (err) {
        // TODO: Fancy error
      }
    )
  }
}



module.exports = MainController
