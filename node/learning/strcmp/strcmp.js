function strcmp(s1, s2) {
	return s1.toUpperCase() === s2.toUpperCase()
}

console.log(strcmp("Hello", 'hello'));
console.log(strcmp('a', 'A'));
console.log(strcmp('b', 'A'));
console.log(strcmp('abcde', 'Abcd'));
