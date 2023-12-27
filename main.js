class LinkedList {
  constructor(node) {
    this.value = node.value;
    this.next = node.next;
  }

  append(node) {
    const addToEnd = (node, list = this) => {
      if (list.next === null) {
        list.next = node;
        return;
      } else {
        addToEnd(node, list.next);
      }
    };
    addToEnd(node);
  }

  prepend(node) {}
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
console.log(linkedList);
