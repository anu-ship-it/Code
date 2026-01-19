import tkinter as tk
from tkinter import ttk, messagebox
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import networkx as nx

class MiniFlightPlanner:
    def _init_(self, root):
        self.root = root
        self.root.title("✈ Mini Flight Route Planner")
        self.root.geometry("900x600")
        self.create_widgets()
        self.create_map()

    def create_widgets(self):
        frame = ttk.Frame(self.root, padding=10)
        frame.pack(side=tk.LEFT, fill=tk.Y)

        ttk.Label(frame, text="Mini Flight Route Planner", font=("Arial", 16, "bold")).pack(pady=10)

        ttk.Label(frame, text="Select Source:").pack(anchor="w", pady=5)
        self.source_var = tk.StringVar(value="Delhi")
        self.source_menu = ttk.Combobox(frame, textvariable=self.source_var, values=["Delhi", "Mumbai", "Kolkata"], width=20)
        self.source_menu.pack(pady=5)

        ttk.Label(frame, text="Select Destination:").pack(anchor="w", pady=5)
        self.dest_var = tk.StringVar(value="Mumbai")
        self.dest_menu = ttk.Combobox(frame, textvariable=self.dest_var, values=["Delhi", "Mumbai", "Kolkata"], width=20)
        self.dest_menu.pack(pady=5)

        ttk.Button(frame, text="Find Best Route", command=self.find_route).pack(pady=15)

        ttk.Button(frame, text="Reset Map", command=self.reset_map).pack(pady=5)

        # Plot area
        self.fig, self.ax = plt.subplots(figsize=(6.5, 5.5))
        self.canvas = FigureCanvasTkAgg(self.fig, master=self.root)
        self.canvas.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

    def create_map(self):
        """Create the base airport graph"""
        self.G = nx.Graph()

        # Add airports (with simple x, y coordinates)
        self.airports = {
            "Delhi": (77.1025, 28.7041),
            "Mumbai": (72.8777, 19.0760),
            "Kolkata": (88.3639, 22.5726)
        }

        # Add weighted connections (distance-like values)
        self.G.add_edge("Delhi", "Mumbai", distance=1150)
        self.G.add_edge("Delhi", "Kolkata", distance=1300)
        self.G.add_edge("Mumbai", "Kolkata", distance=1600)

        self.draw_base_map()

    def draw_base_map(self):
        self.ax.clear()
        self.ax.set_title("Flight Route Map")
        self.ax.set_xlabel("Longitude")
        self.ax.set_ylabel("Latitude")
        self.ax.grid(True, linestyle="--", alpha=0.3)

        # Plot airports
        for name, (lon, lat) in self.airports.items():
            self.ax.scatter(lon, lat, s=80, marker="^", color="skyblue")
            self.ax.text(lon + 0.3, lat + 0.3, name, fontsize=10, weight="bold")

        # Plot edges (connections)
        for u, v, d in self.G.edges(data=True):
            x = [self.airports[u][0], self.airports[v][0]]
            y = [self.airports[u][1], self.airports[v][1]]
            self.ax.plot(x, y, color="gray", linestyle="--")
            mid_x = (x[0] + x[1]) / 2
            mid_y = (y[0] + y[1]) / 2
            self.ax.text(mid_x, mid_y, f"{d['distance']} km", fontsize=8, color="brown")

        self.canvas.draw()

    def find_route(self):
        src = self.source_var.get()
        dst = self.dest_var.get()

        if src == dst:
            messagebox.showwarning("Warning", "Source and Destination cannot be the same.")
            return

        try:
            # Find shortest path based on distance
            path = nx.shortest_path(self.G, src, dst, weight="distance")
            total_dist = sum(self.G[u][v]["distance"] for u, v in zip(path[:-1], path[1:]))

            # Highlight the route
            self.draw_base_map()
            for u, v in zip(path[:-1], path[1:]):
                x = [self.airports[u][0], self.airports[v][0]]
                y = [self.airports[u][1], self.airports[v][1]]
                self.ax.plot(x, y, color="green", linewidth=3)
            self.canvas.draw()

            messagebox.showinfo("Route Found", f"Best route: {' → '.join(path)}\nTotal Distance: {total_dist} km")

        except nx.NetworkXNoPath:
            messagebox.showerror("Error", "No available route between selected airports.")

    def reset_map(self):
        self.draw_base_map()


if _name_ == "_main_":
    root = tk.Tk()
    app = MiniFlightPlanner(root)
    root.mainloop()