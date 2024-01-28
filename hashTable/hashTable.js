class HashTable{
    constructor(size){
        this.size=size
        this.table= new Array(size) 
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        const index=this.hash(key)
        // this.table[index]=value
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem=bucket.find(item => item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                this.table[index].push([key,value])
            }
        }
    }

    get(key){
        const index=this.hash(key)
        // return this.table[index]
        const bucket= this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item => item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index=this.hash(key)
        // this.table[index]=undefined
        const bucket= this.table[index]
        if(bucket){
            const sameKeyItem= bucket.find(item => item[0]==key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
       
    }

    display(){
        let list=''
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                list+=`{${i}:${this.table[i]}} `
            }
        }
        console.log(list)
    }
}

const table= new HashTable(20)
table.set('name','adwaith')
table.set('name','adwaith c')

table.set('age','20')

table.display()

table.remove('age')
// table.display()
