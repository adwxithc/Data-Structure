class MaxHeap{
    constructor(){
        this.heap=[]
    }

    left(i){
        return (i*2)+1
    }
    right(i){
        return (i*2)+2
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    insert(val){
        this.heap.push(val)
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(i){
        while(i>0){
            const p=this.parent(i)
            if(this.heap[p]<this.heap[i]){
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
                i=p
            }else{
                break;
            }
        }
    }

    deleteMax(){
        const removed=this.heap[0]
        const last=this.heap.pop()
        if(this.heap.length){
            this.heap[0]=last
            this.shiftDown(0)
        }
        return removed
    }

    shiftDown(i){
        const l=this.left(i)
        const r=this.right(i)
        let largest=i
        if(this.heap[largest]<this.heap[l] && l<this.heap.length){
            largest=l
        }
        if(this.heap[largest]<this.heap[r] && r<this.heap.length){
            largest=r
        }

        if(largest!==i){
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
            this.shiftDown(largest)
        }
    }

    display(){
        console.log(this.heap)
    }

    buildHeap(arr){
        this.heap=[...arr]
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.shiftDown(i)
        }
    }

}

const heap= new MaxHeap()
heap.buildHeap([1,3,21,14,412,22,43,500,43,1])
console.log(heap.deleteMax());
console.log(heap.deleteMax());


heap.display()