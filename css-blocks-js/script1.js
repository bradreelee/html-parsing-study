const node1 = document.getElementById('test-node');
console.log(
  'deferred',
  window.getComputedStyle(node1).getPropertyValue('color')
);
