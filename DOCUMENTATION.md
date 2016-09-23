# Functions Documentations for BestJavascriptLibrary

## Description

This library based on LoDash, 23 of the most commonly used functions, is available as a NPM package:

https://www.npmjs.com/package/bestjavascriptlibrary


## Context

#### _.chunk(array, [size=1])
Creates an array of elements split by the length of the size parameter given. If the array(collection) cannot be split evenly, the final chunk will be the remaining elements. 

##### Arguments: 
array(Array): The array to process
[size=1](number): The length of each chunk

##### Returns: 
The new array of chunks

##### Example:
```
_.chunk([1,2,1,2], 2);
=> [[1,2], [1,2]]

_.chunk([1,2,1,2,3], 2);
=> [[1,2], [1,2], [3]]
```

#### _.clamp(number, [lower], upper)
Clamps number within the inclusive lower and upper bounds.

##### Arguments:
number (number): The number to clamp.
[lower] (number): The lower bound.
upper (number): The upper bound

##### Returns:
(number): Returns the clamped number.

##### Example:
```
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5
```

#### _.drop(array, [n=1])
Creates a slice of array with n elements dropped from the beginning.

##### Arguments:
array (Array): The array to query.
[n=1] (number): The number of elements to drop.

##### Returns:
(Array): Returns the slice of array.

##### Example:
```
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
```

#### _.filter(collection, [predicate=_.identity])
Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

##### Arguments:
collection (Array|Object): The collection to iterate over.
[predicate=_.identity] (Function): The function invoked per iteration.

##### Returns:
(Array): Returns the new filtered array.

##### Example:
```
var users = [
  { 'user': 'davina', 'age': 27, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']
 
// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 27, 'active': true });
// => objects for ['davina']
 
// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']
 
// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['davina']
```

#### _.forEach(collection, [iteratee=_.identity])
Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

##### Arguments:
collection (Array|Object): The collection to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.

##### Returns:
(*): Returns collection.

##### Example:
```
_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.
 
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

#### _.isArgument(value)
Checks if value is likely an arguments object.

##### Arguments:
value (*): The value to check.

##### Returns:
(boolean): Returns true if value is an arguments object, else false.

##### Example:
```
_.isArguments(function() { return arguments; }());
// => true
 
_.isArguments([1, 2, 3]);
// => false
```

#### _.isArray(value)
Checks if value is classified as an Array object.

##### Arguments:
value(*): The value to check.

##### Returns:
(boolean): Returns true if value is an array, else false.

##### Example:
```
_.isArray([1, 2, 3]);
// => true
 
_.isArray(document.body.children);
// => false
 
_.isArray('abc');
// => false
 
_.isArray(_.noop);
// => false
```

#### _.isFinite(value)
Checks if value is a finite primitive number.

#### Arguments:
value (*): The value to check.

#### Returns
(boolean): Returns true if value is a finite number, else false.

#### Example:
```
_.isFinite(3);
// => true
 
_.isFinite(Number.MIN_VALUE);
// => true
 
_.isFinite(Infinity);
// => false
 
_.isFinite('3');
// => false
```

#### _.isString(value)
Checks if value is classified as a String primitive or object.

##### Arguments:
value(*): The value to check.

##### Returns:
(boolean): Returns true if value is a string, else false.

##### Example:
```
_.isString('abc');
// => true
 
_.isString(1);
// => false
```

#### _.join(array, [separator=','])
Converts all elements in array into a string separated by separator.

##### Arguments:
array (Array): The array to convert.
[separator=','] (string): The element separator.

##### Returns:
(string): Returns the joined string.

##### Example:
```
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

#### _.map(collection, [iteratee=_.identity])
Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

##### Arguments:
collection (Array|Object): The collection to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.

##### Returns:
(Array): Returns the new mapped array.

##### Example:
```
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'davina' },
  { 'user': 'taylor' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['davina', 'taylor']
```

#### _.max(array)
Computes the maximum value of array. If array is empty or falsey, undefined is returned.

##### Arguments:
array (Array): The array to iterate over.

##### Returns:
(*): Returns the maximum value.

##### Example:
```
_.max([4, 2, 8, 6]);
// => 8
 
_.max([]);
// => undefined
```

#### _.once(func)
Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.

##### Arguments:
func (Function): The function to restrict.

##### Returns:
(Function): Returns the new restricted function.

##### Example:
```
var initialize = _.once(createApplication);
initialize();
initialize();
// => `createApplication` is invoked once
```

#### _.reduce(collection, [iteratee=_.identity], [accumulator])
Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.reduce, _.reduceRight, and _.transform.

##### Arguments:
collection (Array|Object): The collection to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.
[accumulator] (*): The initial value.

##### Returns:
(*): Returns the accumulated value.

##### Example:
```
_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3
 
_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
```

#### _.size(collection)
Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.

##### Arguments:
collection (Array|Object|string): The collection to inspect.

##### Returns:
(number): Returns the collection size.

##### Example:
```
_.size([1, 2, 3]);
// => 3
 
_.size({ 'a': 1, 'b': 2 });
// => 2
 
_.size('davina');
// => 6
```

#### _.toArray(value): 
Converts a value to an array.

##### Arguments : 
value (*): the value to convert


##### Returns: 
A new array 

##### Example:
```
_.toArray({a:1, {b:1});
=> [1, 2]

_.toArray('ana');
=> ['a','n','a']
```

#### _.toFinite(value)
Converts value to a finite number.

##### Arguments:
value(*): The value to convert.

##### Returns:
(number): Returns the converted number.

##### Example:
```
_.toFinite(3.2);
// => 3.2
 
_.toFinite(Number.MIN_VALUE);
// => 5e-324
 
_.toFinite(Infinity);
// => 1.7976931348623157e+308
 
_.toFinite('3.2');
// => 3.2
```

#### _.toString(value)
Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.

##### Arguments:
value (*): The value to process.

##### Returns:
(string): Returns the string.

##### Example:
```
_.toString(null);
// => ''
 
_.toString(-0);
// => '-0'
 
_.toString([1, 2, 3]);
// => '1,2,3'
```

#### _.trim([string=''], [chars=whitespace])
Removes leading and trailing whitespace or specified characters from string.

##### Arguments:
[string=''] (string): The string to trim.
[chars=whitespace] (string): The characters to trim.

##### Returns:
(string): Returns the trimmed string.

##### Example:
```
_.trim('  abc  ');
// => 'abc'
 
_.trim('-_-abc-_-', '_-');
// => 'abc'
 
_.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']
```

#### _.without(array, [values])
Creates an array excluding all given values using SameValueZero for equality comparisons.

##### Arguments:
array (Array): The array to inspect.
[values] (...*): The values to exclude.

###### Returns:
(Array): Returns the new array of filtered values.

##### Example:
```
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```
