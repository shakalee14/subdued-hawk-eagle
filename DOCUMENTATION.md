# Functions Documentations for BestJavascriptLibrary

## Description

This library based on LoDash is available as a NPM package:


## Context

#### _.toArray(value): 
Converts a value to an array.

##### Arguments : 
value (*): the value to convert


##### Returns: 
A new array 

##### Example:
```
_.toArry({a:1, {b:1});
=> [1, 2]

_.toArray('ana');
=> ['a','n','a']
```

#### _.chunk(array, [size=1])
Creates an array of elements split by the length of the size parameter given. If the array(collection) cannot be split evenly, the final chunk will be the remaining elements. 

##### Arguments : 
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


