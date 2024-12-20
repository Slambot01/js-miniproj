function prim(graph):
    MST = {}
    pq = new PriorityQueue()
    start_vertex = any vertex in graph
    pq.insert(start_vertex, 0)

    while pq is not empty:
        current_vertex = pq.extractMin()
        MST.add(current_vertex)

        for neighbor in graph.neighbors(current_vertex):
            if neighbor not in MST and graph.weight(current_vertex, neighbor) < pq.getWeight(neighbor):
                pq.decreaseKey(neighbor, graph.weight(current_vertex, neighbor))

    return MST