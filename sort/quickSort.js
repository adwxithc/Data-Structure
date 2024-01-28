

//inplace
function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        const pivot=partition(arr,left,right)
        quickSort(arr,left,pivot-1)
        quickSort(arr,pivot+1,right)
    }
    return arr
}

function partition(arr,left,right){
    const pivot=arr[right]
    let k=left
    for(let i=left;i<right;i++){
        if(arr[i]<pivot){
            swap(arr,i,k)
            k++
        }
    }
    swap(arr,k,right)
    return k
   
}

function swap(arr,i,k){
    let t=arr[i]
    arr[i]=arr[k]
    arr[k]=t
}


console.log('10101010110'.split('1'))



const arr=[5,23,54,54,5,79,25,111,1,135,6]
console.log(quickSort(arr))