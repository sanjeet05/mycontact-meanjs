(function () {
  'use strict';

  angular
    .module('contacts')
    .controller('ContactsListController', ContactsListController);

  ContactsListController.$inject = ['$scope','$state', '$window', 'ContactsService'];

  function ContactsListController($scope, $state, $window, ContactsService) {

    $scope.contacts = ContactsService.query();
    console.log($scope.contacts);

    $scope.remove=function() {
      console.log("hi");
      if ($window.confirm('Are you sure you want to delete?')) {
        ContactsService.$remove($state.go('contacts.list'));
      }
    }
  }
}());
