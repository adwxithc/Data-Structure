function isValidPranthesis(str){
    let stack=[]
    for(let i=0;i<str.length;i++){
        if(str[i]=='(') stack.push('(')
        else if(str[i]==')'){
            if(stack.length)
            stack.pop()
            else return false
        }
    }

    return stack.length==0
}

console.log(isValidPranthesis('(a+b)-(h+w))'));