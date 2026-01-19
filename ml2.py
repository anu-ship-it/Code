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


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import stats
from sklearn.metrics import mean_squared_error
# Load the dataset
df = pd.read_csv("advertising.csv")
# Simple Linear Regression (ONE independent variable)
X = df['TV'].values
Y = df['Sales'].values
# Apply SciPy linear regression
slope, intercept, r_value, p_value, std_err = stats.linregress(X, Y)
# Predictions using best-fit line
Y_pred = slope * X + intercept
# Error metrics
mse = mean_squared_error(Y, Y_pred)
rmse = np.sqrt(mse)
print("Slope (m):", slope)
print("Intercept (c):", intercept)
print("Correlation coefficient (r):", r_value)
print("P-value:", p_value)
print("Mean Squared Error:", mse)
print("Root Mean Squared Error:", rmse)
# Plotting
plt.scatter(X, Y, color='blue', label='Actual Sales')
plt.plot(X, Y_pred, color='red', linewidth=2, label='Best Fit Line')
plt.xlabel("TV Advertising Budget")
plt.ylabel("Sales")
plt.title("Simple Linear Regression using Advertising Dataset")
plt.legend()
plt.show()