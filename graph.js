
class Graph {
	constructor(noOfVertices) {
		this.noOfVertices = noOfVertices;
		this.List = new Array(noOfVertices+1).fill().map(() => Array());
	}

	addEdge(v, w) {
		this.List[v].push(w);
		this.List[w].push(v);
	}

	printGraph() {
		for (let i=0; i<=this.noOfVertices; i++) {
			console.log(i, this.List[i].join(''));
		}
	}

    getList() {
        return this.List;
    }
}

function matToList(mat){
    let V = mat.length;
    let List = Array.from({ length: V+1 }, () => []);

    for(let i=0; i<V; i++){
        for(let j=0; j<V; j++){
            if(mat[i][j] == 1 && i != j) {
                if(!List[i+1].includes(j+1)){
                    List[i+1].push(j+1);
                }
                if(!List[j+1].includes(i+1)){
                    List[j + 1].push(i + 1);
                }
            }
        }
    }
    return List;
}

// Using the above implemented graph class
var g = new Graph(8);
var vertices = [ '1', '2', '3', '4', '5', '6' ];

// adding edges
// g.addEdge(1, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 4);
// g.addEdge(3, 4);
// g.addEdge(3, 5);
// g.addEdge(4, 5);
g.addEdge(1,2)
g.addEdge(1,6)
g.addEdge(2,3)
g.addEdge(2,4)
g.addEdge(6,7)
g.addEdge(6,8)
g.addEdge(4,5)
g.addEdge(7,5)

g.printGraph(); //?

let List = g.getList(); //?

function bfsGraph(V, List) {
    let vis = Array(V).fill(0);
    let start = 1;
    vis[start] = 1;
    let q = [];
    q.push(start);
    let bfs = [];

    while(q.length > 0) {
        let node = q.shift();
        bfs.push(node);

        for(let neighbour of List[node]) {
            if(!vis[neighbour]) {
                vis[neighbour] = 1;
                q.push(neighbour);
            }
        }
    }

    return bfs;
}

function dfs(node, List, vis, result) {
    vis[node] = 1;
    result.push(node);

    for(let neighbour of List[node]){
        if(!vis[neighbour]){
            dfs(neighbour, List, vis, result);
        }
    }
}

function dfsGraph(V, List){
    let vis = Array(V).fill(0);
    let start = 1;
    let result = [];
    dfs(start, List, vis, result);
    return result;
}

const mat = [[1,0,1],[0,1,0],[1,0,1]];
let adjList = matToList(mat);

function dfs(node, List, vis) {
	vis[node] = 1;

	for (let neighbour of List[node]) {
		if (!vis[neighbour]) {
			dfs(neighbour, List, vis);
		}
	}
}

function numOfProvinces(V, adjList){
    let vis = Array(V).fill(0);
    let count = 0;
    for(let i=0; i<V; i++){
        if(!vis[i]){
            count++;
            dfs(i, adjList, vis);
        }
    }
    return count;
}
numOfProvinces(3, adjList); //?