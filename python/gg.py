import matplotlib.pyplot as plt
import numpy as np
x = np.linspace(-10, 10, 400)
y = x ** 2
y2 = x ** 3 / 10  
plt.figure(figsize=(10, 6))
plt.style.use('seaborn-v0_8-darkgrid')
plt.plot(x, y, color='#4A90E2', linewidth=3, label='y = x²')
plt.plot(x, y2, color='#F5A623', linewidth=2, linestyle='--', label='y = x³ / 10')
plt.fill_between(x, y, where=(x >= -5) & (x <= 5), color='#4A90E2', alpha=0.15)
plt.scatter(0, 0, color='red', s=80, zorder=5)
plt.text(0, 5, 'Vertex (0, 0)', color='red', fontsize=12, ha='center', fontweight='bold')
plt.title('Plot of y = x² with Enhanced Visualization', fontsize=18, fontweight='bold', color='#333')
plt.xlabel('X-axis', fontsize=13)
plt.ylabel('Y-axis', fontsize=13)
plt.legend(fontsize=12, loc='upper left', frameon=True, shadow=True)
plt.grid(True, linestyle='--', alpha=0.7)
plt.axhline(0, color='black', linewidth=1)
plt.axvline(0, color='black', linewidth=1)
plt.text(5, 60, 'Parabolic Growth', fontsize=11, color='#333', bbox=dict(facecolor='white', alpha=0.6, edgecolor='gray'))
plt.tight_layout()
plt.show()
