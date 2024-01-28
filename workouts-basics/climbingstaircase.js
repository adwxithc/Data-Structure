function numberofsteps(n){
    if(n<=2) return n
    return numberofsteps(n-1) + numberofsteps(n-2)
}
//not a good approach

function steps(n){
    noOfWays=[1, 2]
    for(let i=2 ;i< n; i++){
        noOfWays[i]=noOfWays[i-1]+ noOfWays[i-2]
    }
    return noOfWays[n-1]
}//O(n)



function noSteps(n){
    noOf =[1,2]
    for(let i=2;i<n;i++){
        noOf[i]=noOf[i-1]+noOf[i-2]
    }
    return noOf[n-1]
}

console.log(steps(1))
console.log(noSteps(1))


console.log(steps(7))
console.log(noSteps(7))


function tower(n,a,c,b){
    if(n==1){
        console.log(`move disk 1 from ${a} to ${c} `)
        return
    }
    tower(n-1,a,b,c)
    console.log(`move disk ${n} from ${a} to${c}`)
    tower(n-1,b,c,a)
}
tower(3,'F','T','U')
