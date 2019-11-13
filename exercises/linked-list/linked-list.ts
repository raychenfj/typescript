class Node<T> {
  next: Node<T> | null = null;
  prev: Node<T> | null = null;
  constructor(public val: T) {}
}

export default class LinkList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  _count: number = 0;

  push(val: T) {
    this._count++;

    const node = new Node<T>(val);
    if (!this.head) {
      this.head = node;
    }
    if (!this.tail) {
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  pop(): T {
    this._count--;

    const node = this.tail;
    this.tail = node!.prev;
    node!.prev = null;
    return node!.val;
  }

  unshift(val: T) {
    this._count++;

    const node = new Node<T>(val);
    if (!this.tail) {
      this.tail = node;
    }
    if (!this.head) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  shift(): T {
    this._count--;

    const node = this.head;
    this.head = node!.next;
    node!.next = null;
    return node!.val;
  }

  count(): number {
    return this._count;
  }

  delete(val: T) {
    let node;
    for (node = this.head; node && node.val !== val; node = node.next) {}
    if (node) {
      this._count--;

      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      node.prev = null;
      node.next = null;
    }
  }
}
