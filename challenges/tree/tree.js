'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let inOrderArr = [];
let preOrderArr = [];
let postOrderArr = [];

module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if(node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else
    if(node.right === null)
      node.right = newNode;
    else
      this.insertNode(node.right, newNode);
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if(node !== null)
    {
      this.inorder(node.left);
      inOrderArr.push(node.value);
      this.inorder(node.right);
      return inOrderArr;
    }
  }

  preorder(node) {
    if(node !== null)
    {
      preOrderArr.push(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
      return preOrderArr;
    }


  }

  postorder(node) {
    if(node !== null)
    {
      this.postorder(node.left);
      this.postorder(node.right);
      postOrderArr.push(node.value);
      return postOrderArr;
    }
  }
};