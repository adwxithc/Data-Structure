class Queue{
    constructor(){
        this.front=0
        this.rear=0
        this.items={}
    }

    enqueue(val){
        this.items[this.rear]=val
        this.rear++
    }
    isEmpty(){
        return this.rear-this.front==0
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('queue is empty')
            return null
        }
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items);
    }
}
const queue= new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// console.log(queue.peek());


queue.print()