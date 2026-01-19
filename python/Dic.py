# Empty dictionary
my_dict = {}

# Ask user how many items they want to add
n = int(input("Enter number of items: "))

for i in range(n):
    key = input(f"Enter key {i+1}: ")
    value = input(f"Enter value for {key}: ")
    my_dict[key] = value   # add key-value pair to dictionary

print("Final Dictionary:", my_dict)
