# Functions Documentations for BestJavascriptLibrary

## Description

This library based on LoDash is available as a NPM package:


## Context

#### _.chunk(array, [size=1])
Creates an array of elements split by the length of the size parameter given. If the array(collection) cannot be split evenly, the final chunk will be the remaining elements. 

##### Arguments : 
array(array): The array to process
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


