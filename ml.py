
#Python Math
import math
a = 4
square_root = math.sqrt(a)
print("The square root of", a, "is", square_root)
# Numpy
import numpy as np
a = np.array([1, 2, 3, 4, 5])
b = np.array([10, 20, 30, 40, 50])
print("Numpy array:", a)
print("Sum of arrays:", a + b)
# Matplotlib
import matplotlib.pyplot as plt
cars = ['AUDI', 'BMW', 'FORD', 'TESLA', 'JAGUAR']
data = [23, 10, 35, 15, 12]
plt.pie(data, labels=cars)
plt.title("Pie Chart")
plt.show()
# Seaborn
import seaborn as sns
import matplotlib.pyplot as plt
# Load the example dataset
tips = sns.load_dataset("tips")
# Create a scatter plot showing the relationship between total bill and tip
sns.scatterplot(data=tips, x="total_bill", y="tip")
# Set plot labels and title
plt.title("Total Bill vs Tip")
plt.xlabel("Total Bill ($)")
plt.ylabel("Tip ($)")
# Display the plot
plt.show()
# SciPy
import scipy.optimize as opt
def func(x):
 return x**2 + 2*x + 1
x0 = 0
res = opt.minimize(func, x0)
print(res)
2.
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# Load dataset
data = pd.read_csv('fast_food_consumption_health_impact_dataset.csv')
data = pd.get_dummies(data, drop_first=True)
print(data.head())
X = data.iloc[:, :10]
Y = data.iloc[:, -1]
# Train-test split
x_train, x_test, y_train, y_test = train_test_split(
X, Y, test_size=0.2, random_state=42
)
# Train model
model = LinearRegression()
model.fit(x_train, y_train)
print("Model trained successfully!")
y_pred = model.predict(x_test)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
print("Mean Squared Error:", mse)
print("RMSE:", rmse)
plt.scatter(y_test, y_pred)
plt.xlabel("Actual Health Impact")
plt.ylabel("Predicted Health Impact")
plt.title("Actual vs Predicted Health Impact")
plt.show()