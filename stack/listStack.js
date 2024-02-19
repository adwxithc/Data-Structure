class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    //O(1)

    push(val){
        const node= new Node(val)
        node.next=this.top
        this.top=node
        this.size++
    }
    //O(1)T
    pop(){
        if(this.isEmpty()){
            console.log('stack under flow')
            return null
        }
        const deleted=this.top
        this.top=this.top.next
        this.size--
        return deleted.val
    }
    // O(1)T

    print(){
        if(this.isEmpty()){
            console.log('stack is empty')
            return 
        }
        let cur= this.top,op=''
        while(cur){
            op+=cur.val+' '
            cur=cur.next
        }
    console.log(op)

    }
    // O(n)T

    peek(){
        return this.isEmpty()?null:this.top.val
    }
    // O(1)T

    clear(){
        this.top=null
        this.size=0
    }
    //O(1)

    reverse(){
        let prev= null,cur=this.top,next
        while(cur){
            next=cur.next
            cur.next=prev
            prev=cur
            cur= next
        }
        this.top= prev
    }
}

const stack1= new Stack()
stack1.push(10)
stack1.push(20)
stack1.push(30)

stack1.print()

stack1.reverse()
stack1.print()


