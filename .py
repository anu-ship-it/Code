import seaborn as sns
import matplotlib.pyplot as plt

# Load example dataset
tips = sns.load_dataset("tips")

# 1. Scatter Plot – total_bill vs tip
sns.scatterplot(x="total_bill", y="tip", data=tips, hue="sex", style="time")
plt.title("Scatter Plot: Total Bill vs Tip")
plt.show()

# 2. Bar Plot – average tip by day
sns.barplot(x="day", y="tip", data=tips, palette="viridis", estimator=sum)
plt.title("Bar Plot: Sum of Tips by Day")
plt.show()

# 3. Box Plot – distribution of total_bill by day
sns.boxplot(x="day", y="total_bill", data=tips, hue="sex", palette="Set2")
plt.title("Box Plot: Total Bill Distribution by Day and Sex")
plt.show()

# 4. Histogram (with KDE) – total_bill distribution
sns.histplot(tips["total_bill"], bins=20, kde=True, color="blue")
plt.title("Histogram: Total Bill Distribution")
plt.show()

# 5. Heatmap – correlation between numerical columns
corr = tips.corr(numeric_only=True)
sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.title("Heatmap: Correlation Matrix")
plt.show()
