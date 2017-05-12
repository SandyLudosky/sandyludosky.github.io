var bigmove = angular.module('bigmove', [])

bigmove.controller('Controller', function() {
    var items = this;

    items.services = [  	
      {heading:'Air Delivery', img:"img/plane.jpeg"},
      {heading:'Ground Shipping', img:"img/truck.jpeg"},
      {heading:'Sea Delivery', img:"img/ship.jpeg"}
    ]

    items.sidebarlinks = [
      "services",
      "air delivery",
      "ground shipping",
      "sea delivery"
    ]

    items.footerlinks = [
      "services",
      "air delivery",
      "ground shipping",
      "sea delivery"
    ]

 });
