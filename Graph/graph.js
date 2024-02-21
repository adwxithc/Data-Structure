class Graph{
    constructor(){
        this.adjucency={}
    }

    addVertex(vertex){
        if(!this.adjucency[vertex]){
            this.adjucency[vertex]=new Set()
        }
    }

    addEdjes(vertex1,vertex2){
        if(!this.adjucency[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjucency[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjucency[vertex1].add(vertex2)
        this.adjucency[vertex2].add(vertex1)

    }

    display(){
        for(const vertex in this.adjucency){
            console.log(vertex+'->'+[...this.adjucency[vertex]]);
        }
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjucency[vertex1].has(vertex2) && 
            this.adjucency[vertex2].has(vertex1)
        ) 
    }

    removeEdjes(vertex1,vertex2){

        this.adjucency[vertex1].delete(vertex2)
        this.adjucency[vertex2].delete(vertex1)

    }

    removeVertex(vertex){
        if(!this.adjucency[vertex]) return
        for(const adjucentVertex of this.adjucency[vertex]){
            this.removeEdjes(vertex,adjucentVertex)
        }
        delete this.adjucency[vertex]
    }
}
const g= new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdjes('A','B')
g.addEdjes('A','C')

g.display()
g.removeVertex('A')

g.display()
