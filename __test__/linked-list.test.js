'use strict';

let LinkedList = require('../linkedList/linked-list');

describe('Linked List', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let emptyList = new LinkedList();
    expect(emptyList.toString()).toBe('');
  });

  test('Can properly insert into the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    expect(emptyList.size).toBe(1);
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.insert(1);
    expect(emptyList.head.value).toBe(1);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.insert(1);
    expect(emptyList.head.value).toBe(1);
    emptyList.insert(2);
    expect(emptyList.head.value).toBe(2);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let emptyList = new LinkedList();
    for(let i = 0; i < 100; i++){
      emptyList.push(i);
    }
    let randomNumber = Math.floor(Math.random() * 100);

    expect(emptyList.includes(randomNumber)).toBeTruthy();
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    expect(emptyList.includes(2)).toBeFalsy();
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    emptyList.push(2);
    expect(emptyList.toString()).toBe('1,2,');
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    emptyList.push(2);w
    emptyList.push(3);
    emptyList.push(4);
    emptyList.insertBefore(3,1);
    expect(emptyList.toString()).toBe('1,2,1,3,4,');
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    emptyList.push(2);
    emptyList.push(3);
    emptyList.push(4);
    emptyList.insertAfter(3,1);
    expect(emptyList.toString()).toBe('1,2,3,1,4,');
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    emptyList.push(2);
    emptyList.push(3);
    emptyList.push(4);
    expect(emptyList.insertBefore(5,1)).toBe(null);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let emptyList = new LinkedList();
    emptyList.push(1);
    emptyList.push(2);
    emptyList.push(3);
    emptyList.push(4);
    expect(emptyList.insertAfter(5,1)).toBe(null);
  });

});