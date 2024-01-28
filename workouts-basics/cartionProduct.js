let arr1=[8,8,23,45],arr2=[3,4,5,6,7,32]
function cartition(arr1,arr2){
    let result=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result
}


console.log( cartition(arr1,arr2))

//O(mn)