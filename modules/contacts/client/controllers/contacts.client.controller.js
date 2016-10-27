(function () {
  'use strict';

  // Contacts controller
  angular
    .module('contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'contactResolve'];

  function ContactsController ($scope, $state, $window, Authentication, contact) {
    var vm = this;

    // vm.authentication = Authentication;
    // vm.contact = contact;
    // vm.error = null;
    // vm.form = {};
    // vm.remove = remove;
    // vm.save = save;
    $scope.authentication = Authentication;
    $scope.contact={};
    $scope.error = null;

    // Remove existing Contact
    $scope.remove=function() {
      if ($window.confirm('Are you sure you want to delete?')) {
        contact.$remove($state.go('contacts.list'));
      }
    }

    // Save new Contact
    $scope.save=function(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', '$scope.contactForm');
        return false;
      }

      contact.$save(successCallback, errorCallback);

      function successCallback(res) {
        $state.go('contacts.view', {
          contactId: res._id
        });
      }
      function errorCallback(res) {
        $scope.error = res.data.message;
      }
    }

    // Update Contact
    $scope.update=function(isValid) {
        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', '$scope.contactForm');
          return false;
      }
      if (vm.contact._id) {
        contact.$update(successCallback, errorCallback);
      }
      function successCallback(res) {
        $state.go('contacts.view', {
          contactId: res._id
        });
      }
      function errorCallback(res) {
        $scope.error = res.data.message;
      }
    }

  }
}());
