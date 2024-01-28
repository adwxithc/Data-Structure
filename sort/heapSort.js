function heapSort(arr){
    let n= arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[i], arr[0]] = [arr[0], arr[i]]
        heapify(arr,i,0)

    }
    return arr
}
function heapify(arr,n,i){
    let largest=i
    const l= (2*i)+1
    const r= (2*i)+2
    if(l<n && arr[l]>arr[largest]){
        largest=l
    }
    if(r<n && arr[r]>arr[largest]){
        largest=r
    }

    if(i!==largest){
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
        heapify(arr,n,largest)
    }

}

console.log(heapSort([100,56,5,6,7,-4,-12,8,92,-1,2,-3,4]));