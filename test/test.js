'use strict'

var should = require('should');
var assert = require('assert');
var Tree = require('../tree');

describe('Tree insertion', function() {
  it('should insert into an empty tree (1 elem)', function() {
    let t = new Tree();
    t.insert(5);

    assert.equal(5, t.head.val);
    assert.equal(null, t.head.left);
    assert.equal(null, t.head.right);
  });

  it('should insert two nodes on each side of the head (3 elems)', function() {
    let t = new Tree();
    t.insert(5);
    t.insert(4);
    t.insert(6);

    let five = t.head;
    let four = five.left;
    let six = five.right;

    assert.equal(5, five.val);
    assert.equal(4, four.val);
    assert.equal(6, six.val);
  });

  it('should insert elements correctly (5 elems)', function() {
    let t = new Tree();
    t.insert(5);
    t.insert(4);
    t.insert(6);
    t.insert(1);
    t.insert(2);

    let five = t.head;
    let four = five.left;
    let six = five.right;
    let one = four.left;
    let two = one.right;

    assert.equal(5, five.val);
    assert.equal(4, four.val);
    assert.equal(6, six.val);
    assert.equal(1, one.val);
    assert.equal(2, two.val);
  })

  it('should insert elements correctly (8 elems)', function() {
    let t = new Tree();
    t.insert(5);
    t.insert(4);
    t.insert(6);
    t.insert(1);
    t.insert(2);
    t.insert(7);
    t.insert(8);
    t.insert(3);

    let five = t.head;
    let four = five.left;
    let six = five.right;
    let one = four.left;
    let seven = six.right;
    let two = one.right;
    let eight = seven.right;
    let three = two.right;

    assert.equal(5, five.val);
    assert.equal(4, four.val);
    assert.equal(6, six.val);
    assert.equal(1, one.val);
    assert.equal(7, seven.val);
    assert.equal(2, two.val);
    assert.equal(8, eight.val);
    assert.equal(3, three.val);
  });
});

describe('Tree neighbors', function() {
  it('should find the correct neighbors in fairly balanced tree (4 elems)', function() {
    let t = new Tree();
    t.insert(5);
    t.insert(4);
    t.insert(6);
    t.insert(1);
    t.findNeighbors();

    let five = t.head;
    let four = five.left;
    let six = five.right;
    let one = four.left;

    assert.equal(null, five.leftNeighbor);
    assert.equal(null, five.rightNeighbor);

    assert.equal(null, four.leftNeighbor);
    assert.equal(six, four.rightNeighbor);

    assert.equal(four, six.leftNeighbor);
    assert.equal(null, six.rightNeighbor);

    assert.equal(null, one.leftNeighbor);
    assert.equal(null, one.rightNeighbor);
  });

  it('should find the correct neighbors in unbalanced tree (5 elems)', function() {
    let t = new Tree();
    t.insert(11);
    t.insert(9);
    t.insert(15);
    t.insert(16);
    t.insert(17);
    t.findNeighbors();

    let eleven = t.head;
    let nine = eleven.left;
    let fifteen = eleven.right;
    let sixteen = fifteen.right;
    let seventeen = sixteen.right;

    assert.equal(null, eleven.leftNeighbor);
    assert.equal(null, eleven.rightNeighbor);

    assert.equal(null, nine.leftNeighbor);
    assert.equal(fifteen, nine.rightNeighbor);

    assert.equal(nine, fifteen.leftNeighbor);
    assert.equal(null, fifteen.rightNeighbor);

    assert.equal(null, sixteen.leftNeighbor);
    assert.equal(null, sixteen.rightNeighbor);

    assert.equal(null, seventeen.leftNeighbor);
    assert.equal(null, seventeen.rightNeighbor);
  });

  it('should find the correct neighbors in tall tree (8 elems)', function() {
    let t = new Tree();
    t.insert(5);
    t.insert(4);
    t.insert(6);
    t.insert(1);
    t.insert(2);
    t.insert(7);
    t.insert(8);
    t.insert(3);
    t.findNeighbors();

    let five = t.head;
    let four = five.left;
    let six = five.right;
    let one = four.left;
    let seven = six.right;
    let two = one.right;
    let eight = seven.right;
    let three = two.right;

    assert.equal(null, five.rightNeighbor);
    assert.equal(null, five.leftNeighbor);

    assert.equal(null, four.leftNeighbor);
    assert.equal(six, four.rightNeighbor);

    assert.equal(four, six.leftNeighbor);
    assert.equal(null, six.rightNeighbor);

    assert.equal(null, one.leftNeighbor);
    assert.equal(seven, one.rightNeighbor);

    assert.equal(one, seven.leftNeighbor);
    assert.equal(null, seven.rightNeighbor);

    assert.equal(null, two.leftNeighbor);
    assert.equal(eight, two.rightNeighbor);

    assert.equal(two, eight.leftNeighbor);
    assert.equal(null, eight.rightNeighbor);

    assert.equal(null, three.rightNeighbor);
    assert.equal(null, three.leftNeighbor);
  });

  it('should find the correct neighbors in a wide tree (7 elems)', function() {
    let t = new Tree();
    t.insert(5);
    t.insert(8);
    t.insert(3);
    t.insert(6);
    t.insert(10);
    t.insert(2);
    t.insert(4);
    t.findNeighbors();

    let five = t.head;
    let eight = five.right;
    let three = five.left;
    let six = eight.left;
    let ten = eight.right;
    let two = three.left;
    let four = three.right;

    assert.equal(null, five.leftNeighbor);
    assert.equal(null, five.rightNeighbor);

    assert.equal(three, eight.leftNeighbor);
    assert.equal(null, eight.rightNeighbor);

    assert.equal(null, three.leftNeighbor);
    assert.equal(eight, three.rightNeighbor);

    assert.equal(four, six.leftNeighbor);
    assert.equal(ten, six.rightNeighbor);

    assert.equal(six, ten.leftNeighbor);
    assert.equal(null, ten.rightNeighbor);

    assert.equal(null, two.leftNeighbor);
    assert.equal(four, two.rightNeighbor);

    assert.equal(two, four.leftNeighbor);
    assert.equal(six, four.rightNeighbor);
  });

  it('should find the correct neighbors in pseudo random tree (20 elems)', function() {
    let t = new Tree();
    t.insert(11);
    t.insert(9);
    t.insert(15);
    t.insert(16);
    t.insert(17);
    t.insert(1);
    t.insert(12);
    t.insert(14);
    t.insert(8);
    t.insert(13);
    t.insert(2);
    t.insert(3);
    t.insert(4);
    t.insert(6);
    t.insert(19);
    t.insert(18);
    t.insert(5);
    t.insert(7);
    t.insert(10);
    t.findNeighbors();

    let eleven = t.head;
    let nine = eleven.left;
    let fifteen = eleven.right;
    let one = nine.left;
    let ten = nine.right;
    let tweleve = fifteen.left;
    let sixteen = fifteen.right;
    let eight = one.right;
    let fourteen = tweleve.right;
    let seventeen = sixteen.right;
    let two = eight.left;
    let thirteen = fourteen.left;
    let nineteen = seventeen.right;
    let three = two.right;
    let eighteen = nineteen.left;
    let four = three.right;
    let six = four.right;
    let five = six.left;
    let seven = six.right;


    assert.equal(null, eleven.leftNeighbor);
    assert.equal(null, eleven.rightNeighbor);

    assert.equal(null, nine.leftNeighbor);
    assert.equal(fifteen, nine.rightNeighbor);

    assert.equal(nine, fifteen.leftNeighbor);
    assert.equal(null, fifteen.rightNeighbor);

    assert.equal(null, one.leftNeighbor);
    assert.equal(ten, one.rightNeighbor);

    assert.equal(one, ten.leftNeighbor);
    assert.equal(tweleve, ten.rightNeighbor);

    assert.equal(ten, tweleve.leftNeighbor);
    assert.equal(sixteen, tweleve.rightNeighbor);

    assert.equal(tweleve, sixteen.leftNeighbor);
    assert.equal(null, sixteen.rightNeighbor);

    assert.equal(null, eight.leftNeighbor);
    assert.equal(fourteen, eight.rightNeighbor);

    assert.equal(eight, fourteen.leftNeighbor);
    assert.equal(seventeen, fourteen.rightNeighbor);

    assert.equal(fourteen, seventeen.leftNeighbor);
    assert.equal(null, seventeen.rightNeighbor);

    assert.equal(null, two.leftNeighbor);
    assert.equal(thirteen, two.rightNeighbor);

    assert.equal(two, thirteen.leftNeighbor);
    assert.equal(nineteen, thirteen.rightNeighbor);

    assert.equal(thirteen, nineteen.leftNeighbor);
    assert.equal(null, nineteen.rightNeighbor);

    assert.equal(null, three.leftNeighbor);
    assert.equal(eighteen, three.rightNeighbor);

    assert.equal(three, eighteen.leftNeighbor);
    assert.equal(null, eighteen.rightNeighbor);

    assert.equal(null, four.leftNeighbor);
    assert.equal(null, four.rightNeighbor);

    assert.equal(null, six.leftNeighbor);
    assert.equal(null, six.rightNeighbor);

    assert.equal(null, five.leftNeighbor);
    assert.equal(seven, five.rightNeighbor);

    assert.equal(five, seven.leftNeighbor);
    assert.equal(null, seven.rightNeighbor);
  });
})