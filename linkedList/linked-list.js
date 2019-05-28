'use strict';

//Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

//Nodes are the individual items/links that live in a linked list. Each node contains the data for each link

class Node {
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

//Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

//Head - The Head is a reference type of type Node to the first node in a linked list.

//This object should be aware of a default empty value assigned to head when the linked list is instantiated.

class LinkedList {
  constructor()
  {
    this.head = null;
    this.size = 0;
  }
  //Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  push(value) {
    var node = new Node(value);
    var current;

    if (this.head === null)
      this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insert(value) {
    if(this.head === null){
      this.head = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    if(this.includes(value) === true){
      while(current !== null) {
        if(current.value === value) {
          let oldVal = current.next;
          current.next = new Node(newValue);
          current.next.next = oldVal;
          break;
        }
        current = current.next;
      }
    } else {
      return null;
    }
  }

  insertBefore(value, newValue) {
    let current = this.head;
    if(this.includes(value) === true){
      while(current !== null) {
        if(current.next.value === value) {
          let oldVal = current.next;
          current.next = new Node(newValue);
          current.next.next = oldVal;
          break;
        }
        current = current.next;
      }
    } else {
      return null;
    }
  }

  //Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    var count = 0; // eslint-disable-line
    var current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      count++;
      current = current.next;
    }
    return false;
  }
  //Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.
  toString() {
    var myLinkedListString = '';
    var current = this.head;
    while (current) {
      myLinkedListString += current.value + ',';
      current = current.next;
    }
    return myLinkedListString;
  }
}

module.exports = LinkedList;

// var myLinkedList = new LinkedList();

// for(let i = 0; i < 10; i++){
//   myLinkedList.add(i);
// }


// console.log(myLinkedList.toArray());
// console.log(myLinkedList.includes(5));
// console.log(myLinkedList.includes(25));


let testLL = new LinkedList();

testLL.push(1);
testLL.push(2);
testLL.push(3);
testLL.push(4);
testLL.push(5);

console.log(testLL.toString());
console.log(this.head);
