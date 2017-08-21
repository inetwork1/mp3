angular.module('myApp').directive('clientDl',function($http, youtubefact, ngProgressFactory,$timeout,$interval){
  return {
    restrict: 'E',
    templateUrl:"/template/client_dl.html",
    scope:{
      id:'@id',
      title:'@title'
    },
    link:function($scope){

      $scope.contained_progressbar = ngProgressFactory.createInstance();
      // $scope.contained_progressbar.set(10);
      $scope.contained_progressbar.setParent(document.getElementById('demo_contained1'));
      $scope.contained_progressbar.setAbsolute();
      $scope.start =function(event) {
        $scope.loading =true;
        $scope.contained_progressbar.setHeight('3px');
        $scope.contained_progressbar.setColor('green');
        $scope.contained_progressbar.start();
      
        var id = setInterval(frame, 100);
        function frame() {
          if ($scope.contained_progressbar.status() >= 100 ) {
            clearInterval(id);
          } else {
             $scope.contained_progressbar.set($scope.contained_progressbar.status() + 5);
            $scope.status = $scope.contained_progressbar.status().toFixed(0) + '%';
          }
        }
      }

      $scope.finish = function(event) {
        $timeout(callAtTimeout, 10);
        $scope.contained_progressbar.complete();
      
        $scope.status = 100 + '%';
      }
      function callAtTimeout() {
      
        $scope.loading =false;
      }
      youtubefact.clientDl($scope.id).then(function(res){
        console.log(res.data);

        var arr = res.data;
        var l = arr.length;
        console.log(l);
        $scope.formats = res.data
        if(l==2){
         $scope.formats = arr[1];
         console.log(arr[1]);
       }else{
         $scope.formats = arr[0];

       }
     });  
    }
  };


});