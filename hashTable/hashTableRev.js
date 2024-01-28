class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
      
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
            this.table[index]=[[key,val]]
        }else{
            const sameKeyIndex=bucket.find(item=>item[0]==key)
            if(sameKeyIndex){
                sameKeyIndex[1]=val
            }else{
                this.table[index].push([key,val])
            }

        }
        
    }

    get(key){
        const index= this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyIndex=bucket.find(item=>item[0]==key)
            if(sameKeyIndex){
                return sameKeyIndex[1]
            }
        }
        return undefined
    }

    remove(key){
        const index= this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyIndex=bucket.find(item=>item[0]==key)
            if(sameKeyIndex){
                bucket.splice(bucket.indexOf(sameKeyIndex),1)
                return sameKeyIndex
            }
        }
    }

    display(){
        let list=''
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                list+=`{ ${i} : ${this.table[i]} } `
            }
        }
        console.log(list)
    }
}

class Node{
    constructor(key,val,next=null){
        this.val=val
        this.key=key
        this.next=null
    }

}

class ListHashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
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
        }else{
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
                cur.next=new Node(key,val)
            }
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
    remove(key){
        const index= this.hash(key)
        const bucket= this.table[index]
        if(bucket){
            if(bucket.key==key){
                this.table[index]=this.table[index].next
                return
            }

            let cur=bucket,prev=null
            while(cur && cur.key==key){
                if(cur.key==key){
                    prev.next=cur.next
                    return
                }
                prev=cur
                cur=cur.next
            }
            if(cur){
                prev.next=cur.next
            }
        }
    }

    display(){
        let list=''
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                let cur=this.table[i]
                while(cur){
                    list+=`{ ${cur.key} : ${cur.val} }`
                    cur=cur.next
                }
            }
        }
        console.log(list)
    }
}

// const table= new HashTable(10)
const table= new ListHashTable(10)
table.set('name','adwaith')
table.set('age','20')
table.set('place','lleh')

table.display()

console.log(table.get('age'));
table.remove('name')
table.remove('place')
table.remove('age')
table.display()
