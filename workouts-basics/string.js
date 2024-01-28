function shift(arr,n){
    let leng=arr.length
    const shift=((n%leng)+leng)%leng
    const leftPart=arr.slice(leng-shift)
    const rightPart=arr.slice(0,leng-shift)
    return leftPart.concat(rightPart)


}

console.log(shift([1,2,3,4,5,6,7,8],2))