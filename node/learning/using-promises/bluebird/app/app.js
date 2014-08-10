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

var getStudents = function(studentId) {
		return new Promise(function(resolve, reject) {
				var student;

				for (var i = 0; i < students.length; i++) {
						if (students[i].id === studentId) {
					            student = students[i];
                                break;
						}
				}
                student? resolve(student) : reject('Not found');
		});
};

exports.getStudents = getStudents;
