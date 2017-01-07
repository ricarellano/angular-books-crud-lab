angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency

BooksShowController.$inject=['$http','$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id;


  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId,
  }).then(function succesCallback(response){
    vm.book = response.data;
    console.log(response.data);
  }, function errorCallback(response){
    console.log('There was an error getting the data', response);

  });

};
