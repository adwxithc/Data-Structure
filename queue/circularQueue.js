class CircularQueue{
    constructor(capacity){
        this.capacity=capacity || 0
        this.curlength=0
        this.front=-1
        this.rear=-1
        this.items=[]
    }

    isFull(){
        return this.curlength==this.capacity
    }
    isEmpty(){
        return this.curlength==0
    }

    enqueue(val){
        if(!this.isFull()){
            this.rear= (this.rear+1)%this.capacity
            this.items[this.rear]=val
            this.curlength++
            if(this.front==-1){
                this.front=this.rear
            }
        }
        return null
        
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('queue is empty')
        }else{
            const deleted= this.items[this.front]
            this.items[this.front]=null
            this.front=(this.front+1)%this.capacity
            this.curlength--
            if(this.isEmpty()){
                this.front=-1
                this.rear=-1
            }
            return deleted
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('queue is empty')
            return null
        }

        let i,list=''
        for( i=this.front;i!==this.rear;i=(i+1)%this.capacity){
            list+=this.items[i]+' '
        }
      
        list+=this.items[i]
        console.log(list)
        
    }
   
}

const queue= new CircularQueue(5)
queue.enqueue(30)

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)


queue.print()


queue.dequeue()
queue.print()
