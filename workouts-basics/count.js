const arr=[12,3,3,4,3,55,65,55,65,4]
const obj={}
for(let i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]+=1
    }

}
let even=0,odd=0

for(x in obj){
    if(obj[x]%2==0){
        even++
    }else{
        
    }
    console.log(x,'->',obj[x])
}