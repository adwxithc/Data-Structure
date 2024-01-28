function towerOfHanoi(n,f,t,u){
    if(n==1){
   

    towerOfHanoi(n-1,f,u,t)
    console.log(`move disk ${n} from ${f} to ${t}`)
    towerOfHanoi(n-1,u,t,f)
}
}

towerOfHanoi(3,'A','C','B')