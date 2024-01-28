class SufixTreeNode{
    constructor(){
        this.children={},
        this.isEnded=false
    }
}
class SufixTree{
    constructor(){
        this.word=null
        this.root=new SufixTreeNode()
    }

    buildSufixTree(word){
        this.word=word
        for(let i=0;i<this.word.length;i++){
            this.insertSufix(i)
        }
    }
    insertSufix(index){
        let node= this.root
        for(let i=index;i<this.word.length;i++){
            const char=this.word[i]
            if(!node.children[char]){
                node.children[char]= new SufixTreeNode()
            }
            node=node.children[char]
        }
        node.isEnded=true
    }

    contains(word){
        let node= this.root
        for(const char of word){
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return node.isEnded // Return true as long as the characters of the substring are found in the tree
    }

}
const t= new SufixTree()
t.buildSufixTree('adwaith')
console.log(t.contains('thc'));