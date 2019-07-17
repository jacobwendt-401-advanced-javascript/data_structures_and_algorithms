'use strict';

class Node {
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor()
  {
    this.head = null;
    this.length = 0;
  }

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
    this.length++;
  }

  insert(value) {
    if(this.head === null){
      this.head = new Node(value);
      this.head.length++;
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
          this.size++;
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
          this.length++;
          break;
        }
        current = current.next;
      }
    } else {
      return null;
    }
  }

  includes(value) {
    var current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }


  toString() {
    var myLinkedListString = '';
    var current = this.head;
    while (current) {
      myLinkedListString += current.value + ',';
      current = current.next;
    }
    return myLinkedListString;
  }

  kFromEnd(k) {
    var current = this.head;
    for(let i = 1; i < this.length-k; i++) {
      current = current.next;
      console.log('count');
    }
    return current.value;
  }








}

module.exports = LinkedList;

let testLL = new LinkedList();

for(let i = 0; i < 10; i++){
  testLL.push(i);
}

console.log(testLL.toString());
console.log(testLL.head);
console.log(testLL.length);
console.log(testLL.kFromEnd(1));
