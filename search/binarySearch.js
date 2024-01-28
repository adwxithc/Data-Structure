
        const arr=[3,4,5,6,7,8,8,23,45,67,89]

        function binarySearch(arr, target){
            let left=0;
            let right=arr.length-1
           

            while( left <= right ){
                let middle= Math.floor((left+right)/2)
              

                if(arr[middle]==target){
                    
                    return middle
                }
                if(arr[middle] < target){
                    left=middle+1 


                }else{
                    right=middle-1

                }
            
            }
            return -1
        }
        // console.log(binarySearch(arr,5))
        //O(logn)
        //recursive method

        function binarySearch(arr,target , left, right){
            if(left>right) return -1
            let middle=Math.floor((left+right)/2)
            if(arr[middle]==target) return middle
            if(arr[middle]<target) return binarySearch(arr,target , middle+1, right)
            else return binarySearch(arr,target , left, middle-1)

        }
        //O(logn)
        

     
        console.log(binarySearch(arr,6,0,arr.length-1))

