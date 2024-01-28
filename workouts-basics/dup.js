const arr=[1,2,2,3,4,5,5,6,7,7,7,7,7,7]

let seen=new Set(),dups=new Set(),count=0

for(elem of arr){
    if(seen.has(elem) && !dups.has(elem)){
        count++
        dups.add(elem)
    }else{
        seen.add(elem)
        
    }
}

console.log(count)