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

vm.updateBook = function (book){
  $http({
    method:'PUT',
    url: 'https://super-crud.herokuapp.com/books/' + bookId,
    data: {
      title: vm.book.title,
      author: vm.book.author,
      image: vm.book.image,
      releaseDate: vm.book.releaseDate
    }
  }).then(function successCallback(updateBook){
     console.log(updateBook);
  }, function errorCallback(response){
     console.log('There was an error getting the data', response);
});
}

vm.deleteBook = function(book){
  $http({
    method: 'DELETE',
    url: 'https://super-crud.herokuapp.com/books/' + bookId,
  }).then(function successCallback(deleteBook){
    console.log(deleteBook);
  },function errorCallback(response){
    console.log('There was an error getting the data', response);
  });
}

};
