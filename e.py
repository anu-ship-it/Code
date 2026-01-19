# Using the tips dataset in seaborn, create Violin plot and  Swarm plot to show the average tip amount for each day of the wek. Color the bars based on whether the customer was a smoker or non-smoker. Give Title, xlabel and ylabel in each visualization.
    

import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")
plt.figure(figsize=(10, 6))
sns.violinplot(x="day", y="tip", hue="smoker", data=tips, split=True)
plt.title("Violin Plot of Tip Amount by Day and Smoking Status")
plt.xlabel("Day of the Week")
plt.ylabel("Tip Amount")
plt.legend(title="Smoker Status")
plt.show()
plt.figure(figsize=(10, 6))
sns.swarmplot(x="day", y="tip", hue="smoker", data=tips)
plt.title("Swarm Plot of Tip Amount by Day and Smoking Status")
plt.xlabel("Day of the Week")
plt.ylabel("Tip Amount")
plt.legend(title="Smoker Status")
plt.show()

# The code creates a Violin plot and a Swarm plot using the seaborn library to visualize the tip amounts from the tips dataset, categorized by day of the week and smoking status. Each plot includes appropriate titles and axis labels.