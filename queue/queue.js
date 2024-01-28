class Queue{
    constructor(){
        this.items=[]

    }

    isEmpty(){
        return this.items.length==0
    }

    enqueue(val){
        this.items.push(val)
    }
    //O(1)
    dequeue(){
        return this.items.shift()
    }
    //O(n)

    print(){
        if(this.isEmpty()){
            console.log('queue is empty');
            return null
        }
        console.log(this.items.toString())
    }
    //O(n)
    peek(){
        return this.items[0]
    }
    //O(1)
}


const queue= new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

queue.print()
console.log(queue.peek());
queue.dequeue()
queue.dequeue()
queue.print()

