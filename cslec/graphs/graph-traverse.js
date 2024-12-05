class Graph {

    constructor() {

        this.adjacencyList = {}

    }

    addNode(node) {

        if (!this.adjacencyList.keys?.includes(node)) this.adjacencyList[node] = []

    }

    addEdge(node, edgeNode) {

        if (this.adjacencyList.keys?.includes(node) 
            && this.adjacencyList.keys?.includes(edgeNode)) {

            this.adjacencyList[node].push(edgeNode)
            this.adjacencyList[edgeNode].push(node)
        }

    }

    // breadth first search
    BFS(start) {

        const queue = [start]
        const results = []
        const visited = {}
        const al = this.adjacencyList
        let currentNode

        visited[start] = true

        // loop and view nodes
        while (queue.length) {
            currentNode = queue.shift()

            // push the viewed node into the results array
            results.push(currentNode)

            // loop through each of the current node's edges
            al[currentNode].forEach(node => {
                // add to the queue (unless already in visited)
                if (!visited[node]) {
                    visited[node] = true
                    queue.push(node)
                }
            })
        }

        return results

    }

    // depth first search
    DFSRecursive(start) {
        const results = [];
        const visited = {};
        const al = this.adjacencyList;

        // utility recursive function (IIFE - immediately invoked function expression)
        (function dfs(node) {
            if (!node) return null

            visited[node] = true
            results.push(node)

            al[node].forEach(n => {
                if (visited[n]) {
                    dfs(n)
                }
            })

        })(start)

        return results
    }


}