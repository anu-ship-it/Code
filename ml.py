# -------------------------------
# Python Basic Libraries Demo
# Math, NumPy, Matplotlib, Seaborn, SciPy
# -------------------------------

import math
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

# -------------------------------
# Math Library
# -------------------------------
print("---- Math Library ----")
print("Square Root of 25:", math.sqrt(25))
print("Power (2^3):", math.pow(2, 3))
print("Factorial of 5:", math.factorial(5))
print("Value of Pi:", math.pi)

# -------------------------------
# NumPy Library
# -------------------------------
print("\n---- NumPy Library ----")
data = np.array([10, 20, 30, 40, 50])
print("Array:", data)
print("Mean:", np.mean(data))
print("Standard Deviation:", np.std(data))

matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\n", matrix)
print("Transpose:\n", matrix.T)

# -------------------------------
# SciPy Library
# -------------------------------
print("\n---- SciPy Library ----")
z_scores = stats.zscore(data)
print("Z-Scores:", z_scores)

# -------------------------------
# Matplotlib Visualization
# -------------------------------
plt.figure()
plt.plot(data, marker='o')
plt.title("Matplotlib Line Plot")
plt.xlabel("Index")
plt.ylabel("Values")
plt.show()

# -------------------------------
# Seaborn Visualization
# -------------------------------
plt.figure()
sns.histplot(data, kde=True)
plt.title("Seaborn Histogram")
plt.show()
# -------------------------------