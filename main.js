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
console.log(linkedList);
// console.log(linkedList.size());
// console.log(linkedList.head());
// console.log(linkedList.tail());
// console.log(linkedList.at(8));
linkedList.pop();
// console.log(linkedList.tail());
// console.log(linkedList.contains(25));
console.log(linkedList.find(25));
