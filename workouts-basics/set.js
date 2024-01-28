
        // function result(arr,value){
        //     const myset=new Set()
        //     for(num of arr){
        //         let target= value-num
        //         if(myset.has(target)) return [num,target]
        //         else myset.add(num)
        //     }
        // }
        // const nums= [1,2,3,4,5,6,5,10,2,3]
        // console.log(result(nums,10))


        //complexity
        //O(n)st

    //    function istwoPow(n){
    //       if(n<2) return false
    //       while(n>=2){
    //         if(n%2!==0) return false
    //         n=n/2
    //       }
    //       return true
    //    }
    //    console.log(istwoPow(8))

    // function binarySearch(arr,target){

    //     let left=0,right=arr.length-1

    //     while(left<=right){
    //         const mid=Math.floor((left+right)/2)
    //         if(arr[mid]==target) return mid
    //         else if(arr[mid]<target) left=mid+1
    //         else right=mid-1
    //     }
    //     return -1

    // }
    function binarySearch(arr,target,left,right){
        if(left>right) return -1
        const mid=Math.floor((left+right)/2)
        if(arr[mid]==target) return mid
        else if(arr[mid]<target) return binarySearch(arr,target,mid+1,right)
        else return binarySearch(arr,target,left,mid-1)

    }
    console.log(binarySearch([1,2,3,4,5,6,7,8,9],12,0,8))


