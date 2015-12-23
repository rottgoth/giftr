(function() {
  'use strict';

  angular
    .module('giftr')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
