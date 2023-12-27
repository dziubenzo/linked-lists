class LinkedList {
  constructor(node) {
    this.value = node.value;
    this.next = node.next;
  }

  append(node) {
    const addToEnd = (node, list = this) => {
      if (list.next === null) {
        return (list.next = node);
      } else {
        addToEnd(node, list.next);
      }
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
    let counter = 1;
    while (pointer.next !== null) {
      counter++;
      pointer = pointer.next;
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
        lastNode = list;
        return;
      } else {
        findLast(list.next);
      }
    };
    findLast();
    return lastNode;
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
console.log(linkedList.tail());
