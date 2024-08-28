export default {
  bindings: {
    categories: '<'
  },
  template: require('./treeComponent.html'),
  controller: function() {
    this.toggle = function(node, $event) {
      $event.stopPropagation();  // Stop event propagation
      node.collapsed = !node.collapsed;
    };
  }
};
