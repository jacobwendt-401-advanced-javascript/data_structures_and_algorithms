'use strict';

class PseudoQueue {
  constructor() {
    this.s1 = null;
    this.s2 = null;
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