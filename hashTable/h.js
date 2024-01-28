function subArray(arr){
  const seen=new Map()
  let count=0
  for(let i=0;i<arr.length;i++){
    if(seen.get(arr[i])){
        count++
    }else{
        seen.set(arr[i],i)
    }
  }
  return count
}

const arr=[1, -1,-1, 5, -2,2,2, 3,3]
console.log(subArray(arr));