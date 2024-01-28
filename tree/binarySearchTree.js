class Node{
    constructor(val){
        this.left=null
        this.right=null
        this.val=val

    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root==null
    }

    insert(val){
        const newNode = new Node(val)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, newNode){
        if(root.val>newNode.val){
            if(!root.left){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    //avg case O(logn)
    //worst case O(n)

    search(root,val){
        if(!root){
            return false
        }
        
        if(root.val==val){
            return true
        }else if(root.val>val){
            return this.search(root.left,val)
        }else{
            return this.search(root.right,val)

        }
    }
    //O(log n)T
    //worstc case O(n)

    //DFS
    preorder(root){
        if(root){
            console.log(root.val);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
//O(n)T
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.val);
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.val);
        }
    }

    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            const cur= queue.shift()
            console.log(cur.val);
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
    }

    min(root){
        if(!root.left) return root.val
        return this.min(root.left)
    }
    //O(logn)
    //worst case O(n)

    max(root){
        if(!root.right) return root.val
        return this.max(root.right)
    }
    //O(logn)
    //worst case O(n)


    delete(target){
        this.root=this.deleteNode(target,this.root)
    }

    deleteNode(target, root){
        if(!root) return root
        if(root.val>target){
            root.left= this.deleteNode(target,root.left)
        }else if(root.val<target){
            root.right= this.deleteNode(target,root.right)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            let successParent=root,succ=root.right

            while(succ.left){
                successParent=succ
                succ=succ.left
            }
            if(successParent!==root){
                successParent.left=succ.right
            }else{
                successParent.right=succ.right
            }
            root.val=succ.val
        }
        return root

    }
    //O(logn)
    //worst case O(n)

     getSuccessorAndPredecessor(target){
        let successor=null,predecessor=null,root=this.root
        while(root){
            if(root.val>target){
                successor=root.val
                root=root.left
            }else if(root.val<target){
                predecessor=root.val
                root=root.right
            }else{
                if(root.left){
                    predecessor=this.max(root.left)
                }
                if(root.right){
                    successor=this.min(root.right)
                }
                break;
            }
        }
        return [  predecessor, successor]
    }

    
}
function isBalanced(root){
    function getBalance(node){
        if(!node){
            return {height : 0, balanced: true}
        }
        let left=getBalance(node.left)
        let right=getBalance(node.right)

        let height=Math.max(left.height,right.height)+1
        let balanced=Math.abs(left.height-right.height)<=1 && left.balanced && right.balanced
        return {height ,balanced}
    }
    return getBalance(root).balanced
}

function findClosest(bst,target){
    let closest=Infinity
    let cur= bst.root
    while(cur){
        if(Math.abs(target-cur.val)<Math.abs(target-closest)){
            closest=cur.val
        }
        if(cur.val>target){
            cur=cur.left
        }else if(cur.val<target){
            cur=cur.right
        }else{
            break;
        }
    }
    return closest
}

function isValidBST(root,min=-Infinity,max=Infinity){
   if(!root) return true

   if(root.val<min || root.val>max) return false

   return (
    isValidBST(root.left,min,root.val) &&
    isValidBST(root.right,root.val,max)
   )
}




const bst= new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(1)
bst.insert(6)
bst.insert(20)
// console.log(isValidBST(bst.root));
// bst.inorder(bst.root)
// console.log(bst.getSuccessorAndPredecessor(5));
console.log(isBalanced(bst.root));



