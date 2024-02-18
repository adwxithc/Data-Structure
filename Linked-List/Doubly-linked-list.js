

class DoublyNode{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }


    isEmpty(){
        return this.size==0
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
            return
        }

        let cur=this.head,list=''
        while(cur){
            list+=`${cur.value} `
            cur=cur.next
        }
        console.log(list)
    }

    reverse(){
        
        if(this.isEmpty()){
            console.log('list is empty')
            return 
        }
        let cur=this.tail,list='';
        while(cur){
            list+=`${cur.value} `
            cur=cur.prev
        }
        console.log(list)
    }

    append(value){
        const node= new DoublyNode(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
           
            node.prev=this.tail
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    prepend(value){
        const node= new DoublyNode(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }


    removeValue(value){
        if(this.isEmpty()){
            console.log('list is empty')
            return
        }
        let del=this.head
        while(del && del.value!==value){
            del=del.next
        }
        if(!del){
            console.log('invalid value')
            return 
        }
        
        if(this.head.value==value){
            this.head=this.head.next
            if(!this.head) this.tail=null
        }
       
       if(del && del.next){
        
        del.next.prev=del.prev
       }else{
        this.tail=del.prev
       }

       if(del && del.prev){
   
        del.prev.next=del.next
       }
       this.size--

    }

    insertAfter(x,value){
        let cur= this.head
        while(cur){
            if(cur.value==x){
                const node = new DoublyNode(value)
                node.prev=cur
                node.next=cur.next

                if(cur.next){
                    cur.next.prev=node
                }else{
                    this.tail=node
                }
                cur.next= node

                this.size++
                return 
            }
            cur=cur.next
        }

        console.log('invalid previous node value')
    }
    //O(n)t
    //O(1)s

    insertBefore(x,value){
     
        let cur= this.head
        while(cur){
            if(cur.value==x){
               const  node= new DoublyNode(value)
                node.next= cur
                node.prev=cur.prev
                if(cur.prev){
                    cur.prev.next=node
                }else{
                    this.head=node
                }
                cur.prev=node
                this.size++
                return 
            }
            cur=cur.next
        }
        console.log('invalid next node value')
    }

    removeDuplicate(){
        if(this.isEmpty()){
            console.log('Empty');
            return
        }
        let cur=this.head
        const seen={}
        while(cur){
            
        if(seen[cur.value]){

            cur.prev.next=cur.next
            if(cur.next){
                cur.next.prev=cur.prev
            }else{
                this.tail=cur.prev
            }
            this.size--
        }else{
            seen[cur.value]=true
        }
        cur=cur.next
        }
    }

    mergeSort(head){
        if(!head || !head.next){
            return head
        }
        const mid=this.getMid(head)
        const nodesAfterMid=mid.next
        mid.next=null

        const left=this.mergeSort(head)
        const right=this.mergeSort(nodesAfterMid)

        return this.merge(left,right)
    }

    merge(left,right){
        const tempNode=new DoublyNode(0)
        let cur=tempNode
        while(left && right){
            if(left.value<right.value){
                cur.next=left
                left.prev=cur
                left=left.next
            }else{

                cur.next=right
                right.prev=cur
                right=right.next
            }
        }

        cur.next= left || right
// console.log('------------------',cur)
        return tempNode.next

    }

    sort(){
         this.head=this.mergeSort(this.head)
    }

    getMid(head){
        let slow=head
        let fast=head
        while(slow.next && fast.next.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow
    }
 
}

const list = new DoublyLinkedList()
list.append(4)
list.append(6)
list.append(3)
list.append(1)
list.append(5)
list.append(4)
list.append(41)

list.append(6)



list.print()
list.removeDuplicate()
list.print()


