class Node{
    constructor(key,val,next=null){
        this.key=key
        this.val=val
        this.next=next
    }
}

class HashTable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,val){
        const index= this.hash(key)
        const bucket= this.table[index]
        if(!bucket){
           
            this.table[index]=new Node(key,val)
            return
        }
        let cur=bucket
        while(cur.next){
            if(cur.key==key){
                cur.val=val
                return
            }
            cur=cur.next
        }
        if(cur.key==key){
            cur.val=val
        }else{
            cur.next= new Node(key,val)
        }
    }

    get(key){
        const index= this.hash(key)
        const bucket= this.table[index]
        if(bucket){
           
            let cur= bucket
            while(cur){
                if(cur.key==key){
                    return cur.val
                }
                cur=cur.next
            }
        }

        return undefined
    }

    display(){
        
        let list=''
        for(let i=0;i<this.size;i++){
            
         
            if(this.table[i]){
                
                
                let cur=this.table[i]
                while(cur){
                    list+=`{ ${i} : ${cur.key} : ${cur.val} }`
                    cur=cur.next
                }
            }
        }
        console.log(list)
    }

    remove(key){
        const index= this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            if(bucket.key==key){
                this.table[index]=bucket.next
                return
            }
            let cur= bucket,prev=null
            while(cur && cur.key!==key){
                prev=cur
                cur=cur.next
            }
            if(cur){
                prev=cur.next
            }
        }

    }
}

const table = new HashTable(10)
table.set('name','adwaith')
table.set('name','adhu')
table.set('nalf','adhu')
table.set('age','20')
table.display()

table.remove('age')

table.display()
