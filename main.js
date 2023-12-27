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
