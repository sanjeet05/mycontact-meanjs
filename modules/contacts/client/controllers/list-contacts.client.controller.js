(function () {
  'use strict';

  angular
    .module('contacts')
    .controller('ContactsListController', ContactsListController);

  ContactsListController.$inject = ['$scope','$state', '$window', 'Authentication',   'ContactsService'];

  function ContactsListController($scope, $state, $window, Authentication,  ContactsService) {

    $scope.contacts = ContactsService.query();
  }
}());
