# House Price Prediction - Basic ML Project
# Install required libraries: pip install pandas scikit-learn matplotlib

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Create sample data (in real project, load from CSV)
np.random.seed(42)
n_samples = 200

data = {
    'area_sqft': np.random.randint(500, 3500, n_samples),
    'bedrooms': np.random.randint(1, 6, n_samples),
    'age_years': np.random.randint(0, 50, n_samples),
    'distance_to_city_km': np.random.randint(1, 30, n_samples)
}

# Generate price with some logic + noise
data['price'] = (
    data['area_sqft'] * 150 +  # $150 per sqft
    data['bedrooms'] * 10000 +  # $10k per bedroom
    -data['age_years'] * 2000 +  # Depreciation
    -data['distance_to_city_km'] * 5000 +  # Location penalty
    np.random.normal(0, 50000, n_samples)  # Random noise
)

df = pd.DataFrame(data)

print("=== House Price Prediction ML Project ===\n")
print("Sample Data:")
print(df.head())
print(f"\nDataset size: {len(df)} houses")

# Step 1: Prepare data
X = df[['area_sqft', 'bedrooms', 'age_years', 'distance_to_city_km']]
y = df['price']

# Step 2: Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"\nTraining set: {len(X_train)} houses")
print(f"Testing set: {len(X_test)} houses")

# Step 3: Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

print("\n=== Model Trained! ===")
print("\nLearned Coefficients:")
for feature, coef in zip(X.columns, model.coef_):
    print(f"  {feature}: ${coef:,.2f}")
print(f"  Intercept: ${model.intercept_:,.2f}")

# Step 4: Make predictions
y_pred = model.predict(X_test)

# Step 5: Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"\n=== Model Performance ===")
print(f"Mean Squared Error: ${mse:,.2f}")
print(f"R² Score: {r2:.4f} (1.0 = perfect predictions)")

# Step 6: Test with a new house
new_house = pd.DataFrame({
    'area_sqft': [2000],
    'bedrooms': [3],
    'age_years': [5],
    'distance_to_city_km': [10]
})

predicted_price = model.predict(new_house)[0]
print(f"\n=== Prediction for New House ===")
print(f"Features: {new_house.to_dict('records')[0]}")
print(f"Predicted Price: ${predicted_price:,.2f}")

# Visualization
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.5)
plt.plot([y_test.min(), y_test.max()], 
         [y_test.min(), y_test.max()], 
         'r--', lw=2)
plt.xlabel('Actual Price ($)')
plt.ylabel('Predicted Price ($)')
plt.title('House Price Predictions vs Actual')
plt.tight_layout()
plt.savefig('predictions.png')
print("\n✓ Visualization saved as 'predictions.png'")
# End of the project code