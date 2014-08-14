var Promise = require('bluebird');

var SyncRestaurant = function syncRestaurant() {
	var customerNumber = 0;

	var takeOrder = function(customer, dishesToPrepare) {
		customerNumber++;
		customer.number = customerNumber;
		console.log('Order Received from customer %d', customerNumber);
		prepareItems(dishesToPrepare).bind(customer)
			.then(serveCustomer).then(clean);
	};

	var prepareItems = function(itemsToPrepare) {
		var timeToPrepare = Math.floor((Math.random() * 100 * itemsToPrepare.length));
		console.log('Will take %dms to prepare %d items', timeToPrepare, itemsToPrepare.length);

		return new Promise(function(fulfill, reject) {
			setTimeout(function() {
				fulfill(itemsToPrepare);
			}, timeToPrepare);
		});
	};

	var serveCustomer = function(dishes) {
		console.log('Serving customer %d', this.number);
		this.eat(dishes);
	};

	var clean = function() {
		var customerNumber = this.number;
		delete this.number;
		console.log('Cleaned up after customer ', customerNumber);
	}
	return {
		serve: takeOrder
	};
}

var Customer = function customer(name) {
	var name = name;
	this.eat = function(dishes) {
		console.log('Eating %d', this.number);
		var timeToEat = Math.floor((Math.random() * 100 * dishes.length));
		var startTime = new Date();
		while(true) {
			//Eating time
			if (((new Date() - startTime) / 10) > timeToEat) break;
		}
		console.log('Done %d', this.number);
		return;
	};
}

var restaurant = new SyncRestaurant();
var customers = [];
var dishesToPrepare = [];
for (var i = 0; i < 5; i++) {
	customers[i] = new Customer(i);
	dishesToPrepare[i] = ['1', '2', '3'];
	restaurant.serve(customers[i], dishesToPrepare[i]);
}
