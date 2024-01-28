class TrieNode{
    constructor(){
        this.children={}
        this.isEnded=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
        
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
    //O(n)

    contains(word){
        let node=this.root
        for(const char of word){
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return node.isEnded
    }
    //O(n)T O(1)S

    findWordsWithPrifix(word){
        let node=this.root,results=[]
        for(const char of word){
            if(!node.children[char]) return results
            node=node.children[char]
        }
        this.collectAllWords(node,word,results)
        return results
    }
    
    collectAllWords(node,currWord,results){
        if(node.isEnded){
            results.push(currWord)
        }
        for(const char in node.children){
            this.collectAllWords(node.children[char],currWord+char,results)
        }
    }
    
    delete(word){
        this.deleteRecrsively(this.root,word,0)
    }
    //O(n)T O(1)S
    deleteRecrsively(node,word,i){
        if(i==word.length){
            if(!node.isEnded){
                return 
            }
            node.isEnded=false
            return
        }

        const char=word[i]
        if(!node.children[char]){
            return 
        }

        this.deleteRecrsively(node.children[char],word,i+1)

        if(Object.keys(node.children[char].children).length==0 && !node.children[char].isEnded){
            delete node.children[char]
        }
    }
}

const t= new Trie()
t.insert('adwaith')
t.insert('adhu')
t.insert('aro')
t.insert('aliya butt')
// t.delete('aliya butt')
console.log(t.findWordsWithPrifix('a'));

