const arr=[1,2,3,4,5,6,5,9]
//find number of elements in array with sum 10

function ArraySum(arr){
    const myset= new Set()
    let count=0
   for(let i=0;i<arr.length;i++){
        if(myset.has(10-arr[i])){
            count++
        }
        myset.add(arr[i])
   }
   return count
}

console.log(ArraySum(arr))