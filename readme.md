# tree-neighbors

tree-neighbors goes through a binary tree and finds each node's neighbors. A neighbor is a node that is adjacent to another. So, a node's children would be an example neighbors to each other. They don't have to be siblings though, as a right side node could be adjacent to a left side node of its parent's sibling. This image shows an example of this. The black lines are regular edges, and the purple ones represent neighbors.

![Image of tree](https://cdn.rawgit.com/mpeterson2/tree-neighbors/master/tree.svg)

All the code is located in `tree.js`, with tests in `test/test.js`.

## Installation

 - Install [NodeJS](https://nodejs.org)
 - Install [Mocha](https://mochajs.org)
 - Run `npm install`

## Usage

There's no real usage to this, but you can run tests to see that it actually works.

 - Run `npm run test` to run the tests.