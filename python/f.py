# Program to calculate Permutations and Combinations

# Function to calculate factorial
def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

# Function to calculate Permutation
def permutation(n, r):
    return factorial(n) // factorial(n - r)

# Function to calculate Combination
def combination(n, r):
    return permutation(n, r) // factorial(r)  # OR factorial(n) // (factorial(r) * factorial(n - r))

# Taking inputs
n = int(input("Enter value of n: "))
r = int(input("Enter value of r: "))

if r > n:
    print("Invalid input: r cannot be greater than n.")
else:
    print(f"P({n},{r}) = {permutation(n, r)}")
    print(f"C({n},{r}) = {combination(n, r)}")