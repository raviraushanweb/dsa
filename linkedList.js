class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertAtStart(val) {
        this.head = new Node(val, this.head);
        this.size++;
    }
    insertAtEnd(val) {
        let node = new Node(val);
        if (!this.head) {
            this.insertAtStart(val);
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }
    insertAtIndex(val, index) {
        if (index < 0 || index > this.size) return;
        let node = new Node(val);
        if (index == 0) {
            this.insertAtStart(val);
            return;
        }

        let cur = this.head;
        let prev = null;
        let count = 0;
        while (count < index) {
            prev = cur;
            count++;
            cur = cur.next;
        }
        prev.next = node;
        node.next = cur;
        this.size++;
    }
    getAtIndex(index) {
        if (index < 0 || index > this.size) return;
        let cur = this.head;
        while (index >= 0) {
            if (!index) return cur.val;
            index--;
            cur = cur.next;
        }
        return null;
    }
    removeAtIndex(index) {
        if (index < 0 || index > this.size) return;
        let cur = this.head;
        let prev = null;
        let count = 0;
        if (index == 0) {
            this.head = cur.next;
        } else {
            while (count < index) {
                prev = cur;
                count++;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        this.size--;
    }
    clearList() {
        this.head = null;
        this.size = 0;
    }
}
