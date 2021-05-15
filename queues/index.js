class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node();
        if(this.lenght === 0) {
            this.first = newNode;
            this.last =  newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.lenght++;
        return this;
    }
    //TODO: dequeue
}

const queue = new Queue();