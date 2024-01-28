class Node{
    constructor(value){
        this.next=null
        this.value=value
    }
}
class CircularLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.head==null
    }
    append(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            node.next=this.head
        }else{
            node.next=this.head
            this.tail.next=node
            this.tail=node

        }
        this.size++
    }

    print(){
        let cur=this.head,list=''

        do{
            list+=`${cur.value} `
            cur=cur.next

        }while(cur!==this.head)
        console.log(list)
    }

    insert(index,value){
        if(index > this.size || index < 0){
            console.log('invalid index')
            return 
        }
        const node = new Node(value)

        if(index==0){
            node.next=this.head
            this.head=node
            this.tail.next=node
        }else{
            let cur= this.head
            for(let i=0;i<index-1;i++){
                cur=cur.next
            }
            node.next=cur.next
            cur.next=node
            if(index==this.size){
                this.tail=node
                node.next=this.head
            }
        }
        this.size++
    }
}

const list = new CircularLinkedList()
list.append(0)
list.append(5)
list.append(50)
list.append(500)
list.append(5000)
list.append(50000)


list.print()
list.insert(6,11)
list.print()

