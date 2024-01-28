class TrieNode{
    constructor(){
        this.children={}
        this.isEnded=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
        this.endSymbol='*'
    }

    insert(word){
        let node=this.root
        for(const char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEnded=true
    }
    //O(n)T O(nm)S
    contains(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEnded
    }

    //O(n)T O(1)T


    findWordWithPrefix(word){
        let node= this.root,results=[]

        for(let i=0;i<word.length;i++){
            const char=word[i]
            if(!node.children[char]) return results
            node=node.children[char]
        }
        this.collectWords(node,word,results)
        return results
    }

    collectWords(node,currentWord,results){
        if(node.isEnded){
            results.push(currentWord)
        }
        for(const char in node.children){
            this.collectWords(node.children[char],currentWord+char,results)
        }
    }

    delete(word){
        this.deleteRecursively(this.root,word,0)
    }

    deleteRecursively(node,word,i){
        if(i==word.length){
            if(!node.isEnded){
                return
            }
            node.isEnded=false
       
            return
        }

            const char = word[i]
            if(!node.children[char]){
                return
            }
            this.deleteRecursively(node.children[char],word,i+1)
        

        if(Object.keys(node.children[char].children).length==0 && !node.children[char].isEnded){
            delete node.children[char]
        }
    }
    
}

const t= new Trie()
t.insert('muhammed adhil')
t.insert('muhammed sinan')
t.insert('muhammed asif')
t.insert('muhammed shibil')
t.insert('muhammed shabil')

t.insert('adwaith')
t.insert('kili')
t.insert('adhu')

console.log(t.findWordWithPrefix('a'));
t.delete('adwaith')
console.log(t.findWordWithPrefix('a'));
