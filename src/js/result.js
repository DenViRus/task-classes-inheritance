const IntBuilder = require('./IntBuilder');
console.log(IntBuilder.random(10, 100));
console.log(new IntBuilder(10).plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());
console.log(new IntBuilder(IntBuilder.random(10, 100)).plus(12, 20, 85).minus(5, 18).multiply(3).divide(7).mod(14).get());

var StringBuilder = require('./StringBuilder');
console.log(new StringBuilder('Hello').plus(" all", "!").minus(4).multiply(3).divide(4).remove("l").sub(1, 1).get());
console.log(new StringBuilder('StringBuilder').plus(" plus", " minus").minus(7).multiply(2).divide(5).remove("i").sub(2, 2).get());
