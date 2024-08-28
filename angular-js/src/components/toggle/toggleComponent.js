export default {
    bindings: {
      label: '@', // Label for the toggle
      isChecked: '<', // Initial checked state (bound from parent)
      onToggle: '&'  // Callback for when the toggle is changed
    },
    template: require('./toggleComponent.html'),
    controller: function() {
      const $ctrl = this;
  
      $ctrl.toggle = function() {
        $ctrl.onToggle({ isChecked: $ctrl.isChecked });
      };
    }
  };
  