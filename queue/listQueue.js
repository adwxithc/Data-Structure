class Node{
    constructor(val) {
        this.val=val
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0

    }

    isEmpty(){
        return this.size==0
    }

    enqueue(val){
        const node = new Node(val)
        if(!this.front){
            this.front= node
            this.rear= node
            
        }else{
            this.rear.next=node
            this.rear=node
            
        }
        this.size++
    }

    dequeue(){
        if(!this.front){
            console.log('queue is empty');
            return null
        }
        const deleted=this.front
        this.front=this.front.next
        this.size--

        if(!this.front){
        this.rear= null
        }
        return deleted.val
    }

    peek(){
        return this.front.val
    }
    print(){
        if(!this.front){
            console.log('queue is empty.')
            return 
        }
        let cur= this.front,list=''
        while(cur){
            list+=cur.val+' '
            cur=cur.next
        }

        console.log(list)
    }

    isEmpty(){
        return !this.front
    }
}

const queue= new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.print()

queue.dequeue()
queue.print()

console.log(queue.peek());