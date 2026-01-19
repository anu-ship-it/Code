# Define a directed graph using an adjacency list

graph = {
    'A': ['B', 'C'],
    'B': ['E'],
    'C': ['F'],
    'E': ['G'],
    'F': [],
    'G': []
}

for node, neighbors in graph.items():
    for n in neighbors:
        print(f"{node} -> {n}")
