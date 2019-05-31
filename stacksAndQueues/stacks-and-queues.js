'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(value) {
    let node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.length++;
    }
    else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
  }

  pop() {
    let currentNode = this.head;

    this.head = currentNode.next;
    currentNode = null;
    this._length--;
  }

  peek() {
    console.log(this.head.value);
    return this.head.value;
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
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    if (this.front === null) {
      this.front = new QueueNode(value);
      this.back = this.front;
    } else {
      let newNode = new QueueNode(value);
      this.back.next = newNode;
      newNode.prev = this.back;
      this.back = newNode;
    }

  }

  dequeue() {
    if(this.front === null) {
      return `Can't remove from empty queue`;
    } else {
      let dequeueVal = this.front.value;
      this.front = this.front.next;
      if(this.front){
        this.front.prev = null;
      }
      return dequeueVal;
    }
  }

  toString() {
    var myLinkedListString = [];
    var current = this.front;
    while (current) {
      myLinkedListString.push(current.value);
      current = current.next;
    }
    return myLinkedListString.join(',');
  }

  peek() {
    if(this.front === null) {
      return `Stack is empty`;
    } else {
      return this.front.value;
    }
  }
}

module.exports = {
  Stack,
  Queue
};
