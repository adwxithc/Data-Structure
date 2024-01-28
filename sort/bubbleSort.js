const arr=[5,23,54,54,5,79,25,111,1,135,6]

function bubbleSort(arr){
    let swapped=false
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            
            if(arr[i]>arr[i+1]){
                let t=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=t
                swapped=true
            }
        }
    }while(swapped)
    
    return arr
}

//O(n^2)

console.log(bubbleSort(arr))