function valuate(expr){
    let stack=[]
    for(let i=0;i<expr.length;i++){
        if(!isNaN(expr[i])){
            stack.push(expr[i])
        }else{
            let n1=Number(stack.pop())
            let n2=Number(stack.pop())
            switch(expr[i]){
                case '+':
                    stack.push(n1+n2)
                    break;
                case '-':
                    stack.push(n1-n2)
                    break;
                case '*' :
                    stack.push(n1*n2)
                    break;
                case '/':
                    stack.push(n1/n2)
                    break;
                default:throw new Error('invalid expression')
            }
        }

    }

    return stack[0]
}

console.log(valuate( "32*5+"))