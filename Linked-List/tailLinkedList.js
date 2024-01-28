class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.tail=node
        }else{
            node.next=this.head
        }
        this.head=node
        this.size++
    }
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++

    }
    //O(1)

    insertArray(arr){
        let prev,start=0
        if(this.isEmpty()){

            const node= new Node(arr[0])
            this.head=node
            prev=node
            start=1
            this.size++
            
        }else{

            prev=this.tail
        }
        
        for(let i=start;i<arr.length;i++){
            const node= new Node(arr[i])
            prev.next=node
            prev=node
            this.size++

        }
        this.tail=prev
       
    }
//O(n)
    removeFrom(index){
        let removedNode
        if(index<0 || index >= this.size){
            return null
        }
        if(index==0){
            this.head=this.head.next
            this.size--
            
            if(this.isEmpty()) this.tail=null
            return
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            prev.next=prev.next.next
            if(index==this.size-1){
                this.tail=prev
            }
            this.size--

        }
    }
    //O(n)
 
    print(){
        if(this.isEmpty()){
            console.log('this list is empty')
        }else{
            let cur=this.head
            let listValues=''
            while(cur){
                listValues+=`${cur.value} `
                cur=cur.next
            }
            console.log(listValues)
        }
    }
    //O(n)
}
const list=new LinkedList()


list.prepend(10)


arr=[100,200,300,400,500,600,700,800,900,1000]
list.insertArray(arr)
list.print()
console.log(list.head.value,list.tail.value)

