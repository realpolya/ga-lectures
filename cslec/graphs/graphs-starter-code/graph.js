class Graph {

    constructor() {

        // Create a property called `nodes` and set it equal to an empty object.
        this.nodes = {}
        // This will be our adjacency list.

    }

    addNode(node) {

        // If the node value passed in does not already exist in our adjacency
        // list, then add it as a key and set it equal to an empty array.
        if (!this.nodes.keys?.includes(node)) this.nodes[node] = []

    }

    addEdge(node, edgeNode) {

        // If the node exists in our adjacency list, then push the edge into the
        // array of edges for that node.
        if (!this.nodes.keys?.includes(node)) this.nodes[node].push(edgeNode)

    }

}

module.exports = { Graph };
