var ASyncRestaurant = function asyncRestaurant() {
	var customerNumber = 0;
	var customers = [];
	var takeOrder = function(customer, dishesToPrepare) {
		customerNumber++;
		this.customers[customerNumber] = customer;
		console.log('Order Received from customer %d', customerNumber);
		prepareItems.call(this, dishesToPrepare, serveCustomer, customerNumber);
	};

	var prepareItems = function(itemsToPrepare, onItemsPrepared, customerNumber) {
		var timeToPrepare = Math.floor((Math.random() * 100 * itemsToPrepare.length));
		console.log('Will take %dms to prepare %d items', timeToPrepare, itemsToPrepare.length);
		var self = this;
		setTimeout(function preparing() {
			onItemsPrepared.call(self, itemsToPrepare, customerNumber);
		}, timeToPrepare);
	};

	var serveCustomer = function(dishes, customerNumber) {
		console.log('Serving customer %d', customerNumber);
		this.customers[customerNumber].eat(dishes, clean, this, customerNumber);
	};

	var clean = function(customerNumber) {
		delete this.customers[customerNumber];
		console.log('Cleaned up after customer ', customerNumber);
	}
	return {
		serve: takeOrder,
		customers: customers
	};
}

var Customer = function customer(name) {
	var name = name;
	this.eat = function(dishes, done, server, number) {
		console.log('Eating');
		var timeToEat = Math.floor((Math.random() * 100 * dishes.length));
		setTimeout(function() {
			console.log('Done %d', number);
			done.call(server, number);
		}, timeToEat);
	};
}

var restaurant = new ASyncRestaurant();
var customers = [];
var dishesToPrepare = [];
for (var i = 0; i < 5; i++) {
	customers[i] = new Customer(i);
	dishesToPrepare[i] = ['1', '2', '3'];
	restaurant.serve(customers[i], dishesToPrepare[i]);
}
