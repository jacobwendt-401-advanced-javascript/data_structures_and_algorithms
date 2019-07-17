'use strict';

const Graph = require('../challenges/Graph/graph');
console.log(Graph);

describe('Name of the group', () => {
  test('should add a value', () => {});
  let myGraph = new Graph();
  myGraph.add('Microsoft');

  expect(myGraph.girth).toBe(1);
  test('add a link between values', () => {
    let myGraph = new Graph();
    myGraph.add('Xbox360');
    myGraph.add('XboxONE');
    myGraph.addLink('Xbox360','XboxONE');

    expect(myGraph.checkLink('Xbox360','XboxONE')).toBe(true);
  });
  test('should delete value', () => {
    let myGraph = new Graph();
    myGraph.add('Xbox360');
    myGraph.add('XboxONE');
    myGraph.addLink('Xbox360','XboxONE');

    myGraph.deleteValue('Xbox360');

    expect(myGraph.contains('Xbox360')).toBe(false);
  });
});
