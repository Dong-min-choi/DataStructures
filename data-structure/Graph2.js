function Graph() {
  let edges = [];

  this.addVertex = function (vertex) {
    edges[vertex] = {};
  };

  this.addEdge = function (startVertex, destVertext, weight) {
    if (weight === undefined) weight = 0;
    edges[startVertex][destVertext] = weight;
  }

  //BFS
  this.bfs = function (startVertex) {
    let queue = [],
      visited = [];
    queue.push(startVertex);

    while (queue.length) {
      let vertex = queue.shift();
      if (!visited[vertex]) { //방문 안했으면
        visited[vertex] = true; //방문 처리
        console.log(`방문한 노드 : ${vertex}`);
        for (let adjVertex in edges[vertex]) { //방문한 노드의 인접 노드들
          //console.log(`ad : ${adjVertex}`);
          queue.push(adjVertex); //인접 노드들을 큐에 넣음
        }
      }
    }
  }

  //DFS
  this.dfs = function (vertex) {
    let visited = [];
    traverseDFS(vertex, visited);
  }

  let traverseDFS = function (vertex, visited) { //DFS를 위한 헬퍼 함수
    visited[vertex] = true; //방문 처리
    console.log(`방문한 노드 : ${vertex}`);
    for (let adjVertex in edges[vertex]) { //방문한 노드의 인접 노드들
      if (!visited[adjVertex]) { //인접 노드 방문 아직 안했으면
        traverseDFS(adjVertex, visited); //재귀
      }
    }
  }
}


let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("G");
g.addVertex("F");
g.addVertex("H");
g.addVertex("J");

g.addEdge("A", "B")
g.addEdge("B", "C")
g.addEdge("B", "E")
g.addEdge("C", "D")
g.addEdge("D", "G")
g.addEdge("D", "F")
g.addEdge("G", "H")
g.addEdge("F", "J")

g.bfs("A");
g.dfs("A");