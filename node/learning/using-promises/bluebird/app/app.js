//app/app.js

/*
 * A simple app that tests how promises can be used to have
 * node modules return promises
 */

var Promise = require('bluebird');

var students = [
	{name: 'abc', id: 1},
	{name: 'xyz', id: 2},
	{name: 'pqr', id: 3}
];

/**
 * Returns the student object matching the specified criteria asynchronously.
 * @param studentId: The student id
 * @param callback: The callback function to be invoked once the student is fetched
 *		This is optional, if no callback is specified a Promise will be returned.
 */
var getStudents = function(studentId, callback) {
	var findStudent = function(resolve, reject) {
		var student;

		for (var i = 0; i < students.length; i++) {
				if (students[i].id === studentId) {
						student = students[i];
						break;
				}
		}
		student? resolve(student) : reject('Not found');
	};
	return new Promise(findStudent).nodeify(callback);
};

exports.getStudents = getStudents;
