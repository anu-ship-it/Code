import math
print("Square Root =",math.sqrt(49))
print("Factorial =",math.factorial(6))
print("Power =",math.pow(4,3))
print("ceiling = ",math.ceil(4.3))
print("Floor",math.floor(5.6))
print("Pi = ",math.pi)
print("Euler's value = ",math.e)

import numpy as np
arr = np.array([2,4,6,8])
print("Array:",arr)
print("Mean:",np.mean(arr))
print("sum: ",np.sum(arr))
print("max: ",np.max(arr))
#2D Array
matrix = np.array([[1,2],[3,4]])
print("matrix: \n",matrix)
print("Transpose:\n ",matrix.T)

#matplotlib library
#data visualizations
import matplotlib.pyplot as plt
x = [1,2,3,4,5]
y = [10,20,30,40,50]
plt.plot(x,y)
plt.xlabel("X - Axis")
plt.ylabel("Y - Axis")
plt.title("Simple Line Graph")
plt.show()

#seaborn library
#attractive visualization of data
import seaborn as sns
import matplotlib.pyplot as plt
data = [10,20,30,40,50]
sns.histplot(data)
plt.title("Seaborn gram")
plt.show()

#scipy library
from scipy import stats
data = [5,10,15,20,25]
print("Mean: ",stats.tmean(data))
print("Median: ",stats.scoreatpercentile(data,50))
print("Mode: ",stats.mode(data))