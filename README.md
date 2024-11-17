# Linked list TOP project

## NOTE : only one commit because I imported code from another repo (private) where I do my DSA training stuff. 

### Linked List 

#### you can create a new LinkedList using this
` const list = new LinkedList();` 

#### append / prepend :

`
list.append("lyon");
list.append("paris");
list.append("dijon");
list.prepend("marseille");
`

##### list = ( marseille )  -> ( lyon )  -> ( paris )  -> ( dijon )

#### unshift/ pop ; remove first/last element of the list

`list.pop() // list is now ( marseille )  -> ( lyon )  -> ( paris )`
`list.unshift() // list is now  ( lyon )  -> ( paris )`


#### size; return integer of list size

` list.size()`

#### at(index) ; return Node at index

`let node = list.at(0)`

#### removeAt(data)

`list.removeAt(2)`

#### insertAt(data, index)

`list.insertAt("lille", 2)`
