// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    //do we set the next value of the node?
    this.tail = node;
    this.length++;
    // TODO should we return the update linked list, if yes how?
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (this.head === null) {
      return undefined;
    }

    let prevNode = this.head;
    let newTail = prevNode;
    while (prevNode.next !== null) {
      newTail = prevNode;
      prevNode = prevNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.size() === 0) {
      this.head = null;
      this.tail = null;
    }

    return prevNode;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let node = new Node(val);
    let prevNode = this.head;
    if (prevNode === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = prevNode;
      this.head = node;
    }
    this.length++;

    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    let size = this.size();
    if (size === 0) {
      return undefined;
    }
    let prevNode = this.head;
    this.head = prevNode.next;
    this.length--;

    if (size === 0) {
      this.tail = null;
      //this.head = null;
    }
    return prevNode;
  }

  // TODO: Implement the contains method here
  contains(target, prevNode = this.head) {
    if (prevNode === null) {
      return false;
    }
    if (prevNode.value === target) {
      return true;
    }
    let nextNode = prevNode.next;
    let found = this.contains(target, nextNode);
    return found;

    //or
    /***
       * let node = this.head;
        while (node) { // this is the same as (node!==null)
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
       */
  }

  // TODO: Implement the get method here
  get(index) {
    let size = this.size();
    if (size === 0 || index >= size) {
      return null;
    }

    let count = 0;
    let prevNode = this.head;
    let nextNode = null;
    while (count != index) {
      nextNode = prevNode.next;
      count++;
    }
    return nextNode;
  }

  // TODO: Implement the set method here
  set(index, val) {
    let node = this.get(index);
    if (node !== null) {
      node.value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index < 0 || index >= this.size()) {
      return false;
    }
    if (index === 0) {
      this.addToHead(val);
      return true;
    }

    if (index === this.size()) {
      this.addToTail(val);
      return true;
    }
    let prevNode = this.get(index - 1);
    if (prevNode !== null) {
      let newNode = new Node(val);
      let currentNext = prevNode.next;
      prevNode.next = newNode;
      newNode.next = currentNext;
      this.length++;
      return true;
    }
    return false;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }
    if (index === 0) {
      return this.removeHead();
    }
    if (index === this.size() - 1) {
      return this.removeTail();
    }

    let prevNode = this.get(index - 1);

    let toRemoveNode = prevNode.next;
    let connectToThisNode = toRemoveNode.next;
    prevNode.next = connectToThisNode;
    this.length--;

    return prevNode;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

let linkedList = new LinkedList();

exports.Node = Node;
exports.LinkedList = LinkedList;
