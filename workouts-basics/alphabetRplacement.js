function replaceNthChar(str,n){
    let s=[]
    for(let i=0;i<str.length;i++){

        s[i]=str[((i+n)%str.length)]

    }
    return s.join('')
}



function replaceNthCharAlphabeticaly(str,n){

    function shiftedAlphabet(char,n){
        const code=char.charCodeAt(0)
        let shiftedCode=code
        if(char>='a' && char<='z'){
            shiftedCode=((((code-97)+n)%26)+26)%26+97
        } else if(char >='A' && char<='Z'){
            shiftedCode=((((code-65)+n)%26)+26)%26+65
        }

        return String.fromCharCode(shiftedCode)
    }

    return str.replace(/[a-zA-Z]/g,(match)=>shiftedAlphabet(match,n))
}


console.log(replaceNthCharAlphabeticaly('abcd',3))

//O(n)