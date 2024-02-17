class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    //O(1)

    prepend(value){
        const node=new Node(value)

        if(!this.isEmpty()){
            node.next=this.head
        }
           
        this.head=node
        this.size++

    }
    // O(1)
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
        

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

    insert(value,index){
        if(index<0 || index> this.size){
            console.log('invalid index')
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev= this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }

    }
    //O(n)

    removeFrom(index){
        let removedNode
        if(index<0 || index >= this.size){
            return null
        }
        if(index==0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return  removedNode.value
    }
    //O(n)

    removeValue(value){

        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){

            this.head=this.head.next
            this.size--
            return value

        }else{

            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                const removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return value
            }
            return null
        }
    }
//O(n)

insertArray(arr){
   
    for(let i=0;i<arr.length;i++){
        this.append(arr[i])
    }
   
}
//O(n)


    searchValue(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0,cur=this.head
        while(cur){
            if(cur.value===value){
                return i
            }
            cur=cur.next
            i++
        }
        return -1
    }
    //O(n)

    searchIndex(index){
        if(index<0 || index>=this.size){
            return -1
        }
        let cur=this.head
        for(let i=0;i<index;i++){
            cur=cur.next
        }
        return cur.value
    }

    reverse(){
        let cur=this.head, prev=null, next;
        while(cur){
            next=cur.next;
            cur.next=prev;
            prev=cur;
            cur=next;
        }
    
        this.head=prev;
    }
    //O(n)

    removeDuplicates(){
        let cur=this.head,prev=null
        const seen={}
        while(cur){
            if(seen[cur.value]){
                prev.next=cur.next
                this.size--
            }else{
                seen[cur.value]=true
                prev=cur
                
            }
            cur=cur.next
            
        }
    }

  
}
 const list= new LinkedList()
 list.append(10)
 list.append(20)
 list.append(30)
 list.append(30)
 list.append(30)
 list.append(40)
 list.append(50)
 list.append(60)
 list.print()
 list.removeDuplicates()
 list.print()


