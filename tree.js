'use strict'

class Tree {
  constructor() {
    this.head = null;
  }

  insert(val) {
    if (!exists(this.head)) {
      this.head = new Node(val);
      return;
    }

    this._insertHelper(this.head, val);
  }

  _insertHelper(currNode, val) {
    if (val < currNode.val) {
      if (exists(currNode.left)) {
        this._insertHelper(currNode.left, val);
      }
      else {
        currNode.left = new Node(val);
      }
    }

    else {
      if (exists(currNode.right)) {
        this._insertHelper(currNode.right, val);
      }
      else {
        currNode.right = new Node(val);
      }
    }
  }

  findNeighbors() {
    let nodesList = [];
    let currNode = this.head;

    if (exists(currNode.left)) {
      nodesList.push(currNode.left);
    }
    if (exists(currNode.right)) {
      nodesList.push(currNode.right);
    }

    this._handleNodesList(nodesList);

    while(nodesList.length > 0) {
      let workingNodesList = [];
      for (let i = 0; i<nodesList.length; i++) {
        if (exists(nodesList[i].left)) {
          workingNodesList.push(nodesList[i].left);
        }
        if (exists(nodesList[i].right)) {
          workingNodesList.push(nodesList[i].right);
        }
      }
      this._handleNodesList(workingNodesList);

      nodesList = workingNodesList;
    }
  }

  _handleNodesList(nodes) {
    for (let i=0; i<nodes.length - 1; i++) {
      let leftNode = nodes[i];
      let rightNode = nodes[i + 1];
      leftNode.rightNeighbor = rightNode;
      rightNode.leftNeighbor = leftNode;
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.rightNeighbor = null;
    this.leftNeighbor = null;
  }
}

function exists(val) {
  return val !== undefined && val !== null;
}

module.exports = Tree;