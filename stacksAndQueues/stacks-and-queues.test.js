'use strict';
var StacksAndQueues = require('./stacks-and-queues');

describe('Stack', () => {
  test('Can successfully push onto a stack', () => {
    let myTestStack = new StacksAndQueues.Stack();
    for (let index = 1; index < 11; index++) {
      myTestStack.push(index);
    }
    expect(myTestStack.toString()).toBe('10,9,8,7,6,5,4,3,2,1,');
  });

  test('Can successfully pop off the stack', () => {
    let myTestStack = new StacksAndQueues.Stack();
    for (let index = 1; index < 11; index++) {
      myTestStack.push(index);
    }
    myTestStack.pop();
    expect(myTestStack.toString()).toBe('9,8,7,6,5,4,3,2,1,');
  });

  test(' Can successfully empty a stack after multiple pops.', () => {
    let myTestStack = new StacksAndQueues.Stack();
    myTestStack.push(1);
    myTestStack.push(2);
    myTestStack.push(3);

    myTestStack.pop();
    myTestStack.pop();
    myTestStack.pop();

    expect(myTestStack.toString()).toBe('');
  });
  test('Can successfully peek the next item on the stack.', () => {
    let myTestStack = new StacksAndQueues.Stack();
    myTestStack.push(1);
    myTestStack.push(2);
    myTestStack.push(3);

    expect(myTestStack.peek()).toBe(3);

  });
});

describe('Queue', () => {
  it('should create a new queue', () => {
    let emptyList = new StacksAndQueues.Queue();
    expect(emptyList.toString()).toBe('');
  });
  it('should add nodes to the end of the queue', () => {
    let emptyList = new StacksAndQueues.Queue();
    emptyList.enqueue(1);
    emptyList.enqueue(2);
    emptyList.enqueue(3);
    expect(emptyList.toString()).toBe('1,2,3');
  });
  it('should remove a node from the beginning of the queue', () => {
    let emptyList = new StacksAndQueues.Queue();
    emptyList.enqueue(1);
    emptyList.enqueue(2);
    emptyList.enqueue(3);
    expect(emptyList.dequeue()).toBe(1);
    expect(emptyList.dequeue()).toBe(2);
    expect(emptyList.dequeue()).toBe(3);
    expect(emptyList.dequeue()).toBe(`Can't remove from empty queue`);
  });
  it('should return the first value in the queue', () => {
    let emptyList = new StacksAndQueues.Queue();
    emptyList.enqueue(1);
    emptyList.enqueue(2);
    emptyList.enqueue(3);
    expect(emptyList.peek()).toBe(1);
    emptyList.dequeue();
    expect(emptyList.peek()).toBe(2);
    emptyList.dequeue();
    expect(emptyList.peek()).toBe(3);
    emptyList.dequeue();
    expect(emptyList.peek()).toBe(`Stack is empty`);
  });
});