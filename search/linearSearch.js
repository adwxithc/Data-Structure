const arr= [3,4,11,45,5,6,1,32,64]

function linearSearch(arr,item){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===item) return i
    }
    return -1
}
console.log(linearSearch(arr,5));