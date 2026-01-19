def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result


# Example usage:
arr = [5, 2, 9, 1, 5, 6]
sorted_arr = merge_sort(arr)
#print(sorted_arr)   # [1, 2, 5, 5, 6, 9]


class Student:
    def __init__(self, name, age, grade):
        # __init__ initializes the object with given values
        self.name = name
        self.age = age
        self.grade = grade

    def introduce(self):
        print(f"My name is {self.name}, I am {self.age} years old, and I am in grade {self.grade}.")

# Creating objects
s1 = Student("Jack", 22, "2nd Year")
s2 = Student("Oggy", 20, "1st Year")

# Using the method
s1.introduce()
s2.introduce()


import numpy as np

# 1. Create an array using arange()
arr = np.arange(1, 11)   # numbers from 1 to 10
print("Original array:", arr)

# 2. Array slicing
print("First 5 elements:", arr[:5])      # slice first 5 elements
print("Last 3 elements:", arr[-3:])      # slice last 3 elements
print("Every 2nd element:", arr[::2])    # step slicing

# 3. Reshape array
reshaped = arr.reshape(2, 5)   # convert into 2x5 matrix
print("\nReshaped 2x5 array:\n", reshaped)

# 4. Array operations
print("\nSum of array:", arr.sum())
print("Mean of array:", arr.mean())


