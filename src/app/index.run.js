(function() {
  'use strict';

  angular
    .module('bananaRadioWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
