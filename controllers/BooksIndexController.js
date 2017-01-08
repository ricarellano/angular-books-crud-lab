angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

// add your BooksIndexController function here!
// don't forget $http if you need to make requests

BooksIndexController.$inject = ['$http'];
function BooksIndexController($http){
  var vm = this;




  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response){
    vm.books = response.data.books;
    console.log(response.data.books);
  }, function errorCallback(response){
    console.log('There was an error getting the data', response);

  });

  vm.createBook = function(){
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books',
      data: vm.book,
    }).then(function successCallback(response){
      console.log('response create book', response.data)
      console.log(vm.books);
      vm.books.push(response.data);
      console.log(vm.books);
    },function errorCallback(error){
      console.log('There was an error getting the data', error);
    });
  }

};
