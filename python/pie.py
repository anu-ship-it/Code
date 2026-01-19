import matplotlib.pyplot as plt

activities = ['Study', 'Sleep', 'Exercise', 'Leisure', 'Others']
hours = [8, 7, 2, 5, 2]
explode = [0.1 if h == max(hours) else 0 for h in hours]
colors = ['#4A90E2', '#50E3C2', '#F5A623', '#B8E986', '#D0011B']
plt.figure(figsize=(8, 8))
plt.style.use('seaborn-v0_8-darkgrid')
wedges, texts, autotexts = plt.pie(
    hours,
    labels=activities,
    autopct='%1.1f%%',
    startangle=90,
    colors=colors,
    explode=explode,
    shadow=True,
    textprops={'fontsize': 11, 'color': 'black'}
)
for autotext in autotexts:
    autotext.set_fontsize(11)
    autotext.set_fontweight('bold')
    autotext.set_color('white')

plt.title('Daily Activity Time Distribution', fontsize=18, fontweight='bold', color='#333')
plt.legend(wedges, activities, title='Activities', loc='center left', bbox_to_anchor=(1, 0.5), fontsize=10)
plt.text(0, 0, f'Total\n{sum(hours)} hrs', ha='center', va='center', fontsize=12, fontweight='bold', color='#333')
plt.axis('equal')
plt.tight_layout()
plt.show()
