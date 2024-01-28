const arr=[5,23,54,54,5,79,25,111,1,135,6]
function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            let t=arr[minIndex]
            arr[minIndex]=arr[i]
            arr[i]=t
        }
    
    }
}
selectionSort(arr)
console.log(arr)
//O(n^2)T
//O(1)S