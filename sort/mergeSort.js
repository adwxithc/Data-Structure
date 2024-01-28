let arr=[8,8,23,45,67,89,3,4,5,6,7,32]

function mergeSort(arr){
    if(arr.length<2) return arr
    const mid=Math.floor(arr.length/2)
    const left=arr.slice(0,mid)             //log(n)
    const right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left, right){
    let sorted=[]
    while(left.length && right.length){ //n
        if(left[0]<= right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())

        }
    }
    return [...sorted, ...left, ...right]
}
//O(nlogn)
console.log(mergeSort(arr))