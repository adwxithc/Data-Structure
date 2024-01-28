function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let nti=arr[i],pos=i-1
       
            while(arr[pos]>nti && pos>=0){
                arr[pos+1]=arr[pos]
                pos--

            }
            arr[pos+1]=nti
        
    }
    return arr
}


//O(n^2)


const arr=[5,23,54,54,5,79,25,111,1,135,6]
console.log(insertionSort(arr))