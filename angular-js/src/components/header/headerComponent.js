export default {
    bindings: {
      username: '<',
      onLogout: '&'
    },
    template: require('./headerComponent.html'),
    controller: function() {
      this.isDropdownOpen = false;
  
      this.toggleDropdown = function($event) {
        $event.preventDefault();
        this.isDropdownOpen = !this.isDropdownOpen;
      };
    }
  };
  