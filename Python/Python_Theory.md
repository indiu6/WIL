## Data Types

1. number 1,2,3...(int)
2. str 'like this' "like that"
3. bool True False (upper_case)
4. float a_float = 3.12
5. None "like null", only in Python

+) check data type
print(type(a_float)) // class 'float'

Convention = super_long_variables : snake case

## Sequence

List - mutable sequence '[]'

Tuple - immutable sequence '()'

Dictionary - mutable '{}'

## is vs ==

The == operator compares the value or equality of two objects, whereas the Python is operator checks whether two variables point to the same object in memory. In the vast majority of cases, this means you should use the equality operators == and !=, except when you’re comparing to None.

## args

Positional Argument: infinity(*args)

Keyword Argument: ("" = ' ') / infinity(**kwargs)

```python
def infinity_plus(*args):
    result = 0
    for number in args:
        result += number
    print(result)

infinity_plus(1,5,54,8,48,646,1,1,654,81,5,4,8748,4)
```

## class

* Methods = Function inside the class
* In Python, All Function must have 1 argument
* If you wouldn't use an argument on method, get (self) into the method
* First argument in methods = the calling Instance in itself
  
```python
porche.start(porche) === def start(self):
```

## class inherit

inherit = extend: Extending on existing class

if you plus one more thing in __init__ keeping everything, you have to use 'super'function
-> this is calling upper(parents) class.
