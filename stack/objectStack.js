class Stack{
    constructor(){
        this.obj={}
        this.head=0
    }

    push(elem){
        this.obj[this.head]=elem
        this.head++
    }

    pop(){
        delete this.obj[this.head]
        this.head--

    }
    peek(){
        return this.obj[this.head-1]
    }
}

const stack= new Stack()
stack.push(10)
stack.push(100)
stack.push(1000)
console.log(stack.peek());