// Contacts service used to communicate Contacts REST endpoints
(function () {
  'use strict';

  angular
    .module('contacts')
    .factory('ContactsService', ContactsService)
    .factory('FamilyGroupService', FamilyGroupService);

  ContactsService.$inject = ['$resource'];

  function ContactsService($resource) {
    return $resource('api/contacts/:contactId', {
      contactId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
    });
  }

  function FamilyGroupService() {
    function familyGroups(){
      var groups=[{'displayName':'Family','key':'family'},{'displayName':'Friends', 'key':'friends'},{'displayName':'Others', 'key':'others'}];
      return groups;
    }
    return {familyGroups:familyGroups};
  }

}());
