import matplotlib.pyplot as plt
import numpy as np

subjects = ['Math', 'Science', 'English', 'History', 'Art']
student_A = [85, 90, 75, 80, 95]
student_B = [78, 88, 82, 76, 89]
x = np.arange(len(subjects))
bar_width = 0.35
plt.figure(figsize=(10, 6))
plt.style.use('seaborn-v0_8-darkgrid')
bars1 = plt.bar(x - bar_width/2, student_A, bar_width, label='Student A', color='#4A90E2', edgecolor='black')
bars2 = plt.bar(x + bar_width/2, student_B, bar_width, label='Student B', color='#50E3C2', edgecolor='black')
plt.title('Student Performance Comparison by Subject', fontsize=18, fontweight='bold', color='#333')
plt.xlabel('Subjects', fontsize=13)
plt.ylabel('Scores', fontsize=13)
plt.xticks(x, subjects, fontsize=12)
plt.legend(fontsize=12, loc='upper left', frameon=True, shadow=True)
for bar_group in [bars1, bars2]:
    for bar in bar_group:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, height + 1, f'{height}', 
                 ha='center', va='bottom', fontsize=10, fontweight='bold')
plt.grid(axis='y', linestyle='--', alpha=0.6)
plt.tight_layout()
plt.show()
