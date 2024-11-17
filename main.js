import { LinkedList } from "./linkedlist.js";
const list = new LinkedList();

list.append("lyon");
list.append("paris");
list.append("dijon");
list.prepend("marseille");

let ans = list.find("paris");
ans = list.find("lens");
ans = list.find("marseille");

console.log(list);
list.toString()

console.log(list.at(2));

list.insertAt("lille", 2);

list.toString();

list.removeAt(2);

list.toString();

let list_2 = new LinkedList();



list_2.toString();
