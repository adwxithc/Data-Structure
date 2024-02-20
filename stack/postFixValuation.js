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

//morethan one digits
function postfixEval(expr){
    const stack=[];
    let number=''

    function isOperator(op){
        return op=='+' || op=='-' || op=='*' || op=='/'
    }
    for(let i=0;i<expr.length;i++){
         if(isOperator(expr[i])){
            if(number!==''){
                stack.push(number)
                number=''
                }

            const n1=Number(stack.pop()),n2=Number(stack.pop())
            switch(expr[i]){

                case '+' :
                            stack.push(n1+n2)
                            break;
                case '-' :
                            stack.push(n1-n2)
                            break;
                case '*' :
                            stack.push(n1*n2)
                            break;
                case '/' :
                            stack.push(n1/n2)
                            break;
                default:console.log('invalid expression');
                        return
            }

        }else if(expr[i]==' '){
            if(number!==''){
            stack.push(number)
            number=''
            }
        }else{
            number+=expr[i]
        }
    }
    return stack[0]
}