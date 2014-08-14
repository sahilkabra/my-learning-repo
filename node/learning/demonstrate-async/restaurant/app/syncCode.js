var SyncRestaurant = function syncRestaurant() {
	var customerNumber = 0;
	var takeOrder = function(customer, dishesToPrepare) {
		customerNumber++;
		console.log('Order Received from customer %d', customerNumber);
		var preparedItems = prepareItems(dishesToPrepare);
		serveCustomer(customer, preparedItems);
	};

	var prepareItems = function(itemsToPrepare) {
		var timeToPrepare = Math.floor((Math.random() * 100 * itemsToPrepare.length));
		console.log('Will take %dms to prepare %d items', timeToPrepare, itemsToPrepare.length);
		var startTime = new Date();
		while(true) {
			//Simulating synchronous execution
			if (((new Date() - startTime) / 10) > timeToPrepare) return itemsToPrepare;
		}
	};

	var serveCustomer = function(customer, dishes) {
		console.log('Serving customer %d', customerNumber);
		customer.eat(dishes);
		clean();
	};

	var clean = function() {
		console.log('Cleaned up after customer ', customerNumber);
	}
	return {
		serve: takeOrder
	};
}

var Customer = function customer(name) {
	var name = name;
	this.eat = function(dishes) {
		console.log('Eating');
		var timeToEat = Math.floor((Math.random() * 100 * dishes.length));
		var startTime = new Date();
		while(true) {
			//Simulating synchronous execution
			if (((new Date() - startTime) / 10) > timeToEat) return;
		}
		console.log('Done');
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
