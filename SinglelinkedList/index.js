// 1 --> 2 --> 3 --> null
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    preprend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        }
        if(index === 0) {
            return this.preprend(value);
        } 
        const newNode = new Node(value);
        const firstPointer = this.getIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    getIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        if(index >= this.length || index === undefined) {
            return null;
        }
        if(this.getIndex(index) === this.head) {
            this.head = this.head.next;
            this.length--;
            return this;
        }
        if(this.getIndex(index) === this.tail) {
            const node = this.getIndex(index - 1);
            this.tail = node;
            this.tail.next = null;
            this.length--;
            return this;
        }
        const firstPointer = this.getIndex(index - 1);
        const currentNode = this.getIndex(index);
        firstPointer.next = currentNode.next;
        this.length--;
        return this;
    }
    toString() {
        for(let i = 0; i < this.length; i++) {
            console.log(this.getIndex(i));
        }
    }
}

let linkedList = new SingleLinkedList(0);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

