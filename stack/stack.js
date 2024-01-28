class Stack{
    constructor(){
        this.items=[]
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    push(element){
        this.items.push(element)
        this.size++
        return  this.size-1
    }
    pop(){
        if(this.isEmpty()){
            console.log('stack is empty')
            return null
        }
        
        this.size--
        return this.items.pop()
    }

    peek(){
        return this.items[this.size-1]
    }

    print(){
        if(this.isEmpty()){
            console.log('stack is empty')
            return 
        }
        console.log(this.items.toString())
    }
    clear(){
        this.items=[]
        this.size=0
        return this.items
    }

   
}

const stack=new Stack()
stack.push(10)
stack.push(100)
stack.push(1001)
stack.push(1002)
stack.print()


console.log(stack.pop());

stack.print()


console.log(stack.peek());



