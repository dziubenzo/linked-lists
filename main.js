class LinkedList {
  constructor(node) {
    this.value = node.value;
    this.next = node.next;
  }

  append(node) {
    const addToEnd = (node, list = this) => {
      if (list.next === null) {
        return (list.next = node);
      }
      addToEnd(node, list.next);
    };
    addToEnd(node);
  }

  prepend(node) {
    const headValue = this.value;
    const headNext = this.next;
    this.value = node.value;
    this.next = new Node(headValue, headNext);
  }

  size() {
    let pointer = this;
    let counter = 0;
    while (pointer !== null) {
      pointer = pointer.next;
      counter++;
    }
    return counter;
  }

  head() {
    return new Node(this.value);
  }

  tail() {
    let lastNode;
    const findLast = (list = this) => {
      if (list.next === null) {
        return (lastNode = list);
      }
      findLast(list.next);
    };
    findLast();
    return lastNode;
  }

  at(index) {
    let pointer = this;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    if (pointer === null) {
      return 'Error: Node does not exist. Try using a smaller index value.';
    }
    return new Node(pointer.value);
  }

  pop() {
    const findSecondLast = (list = this) => {
      if (list.next.next === null) {
        return (list.next = null);
      }
      findSecondLast(list.next);
    };
    findSecondLast();
  }

  contains(value) {
    let pointer = this;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  find(value) {
    let pointer = this;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  toString() {
    let pointer = this;
    let string = '';
    while (pointer !== null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.next;
    }
    string += 'null';
    return string;
  }

  insertAt(value, index) {
    if (index === 0) {
      return this.prepend(new Node(value));
    }
    if (index > this.size()) {
      return console.log('Error: Index too high.');
    }
    let nodeBefore;
    const findNodeBefore = (counter = 0, list = this) => {
      if (counter === index - 1) {
        return (nodeBefore = list);
      }
      counter++;
      findNodeBefore(counter, list.next);
    };
    findNodeBefore();
    const oldNext = nodeBefore.next;
    nodeBefore.next = new Node(value, oldNext);
  }

  removeAt(index) {
    if (index === 0) {
      this.value = this.next.value;
      this.next = this.next.next;
      return;
    }
    if (index >= this.size()) {
      return console.log('Error: Index too high.');
    }
    const findAndSkipNode = (counter = 0, list = this) => {
      if (counter === index - 1) {
        return (list.next = list.next.next);
      }
      counter++;
      findAndSkipNode(counter, list.next);
    };
    findAndSkipNode();
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let linkedList = new LinkedList(new Node(5));
linkedList.append(new Node(10));
linkedList.append(new Node(15));
linkedList.append(new Node(20));
linkedList.append(new Node(25));
linkedList.append(new Node(30));
linkedList.prepend(new Node(1));
linkedList.prepend(new Node(2));
linkedList.prepend(new Node(3));
linkedList.pop();
linkedList.insertAt(5555, 3);
linkedList.removeAt(3);
console.log(linkedList.toString());
