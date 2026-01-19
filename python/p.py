# Print all primes less than 1000
print("Prime numbers less than 1000:")
for num in range(2, 1000):
    for i in range(2, num):  # check ALL numbers before 'num'
        if num % i == 0:
            break
    else:
        print(num, end=" ")

# Twin primes
print("\n\nTwin prime pairs are:")

for num in range(3, 1000, 2):  # only odd numbers
    # check if 'num' is prime
    for i in range(2, num):
        if num % i == 0:
            break  #Not prime

    else:

        for j in range(2, num + 2):
            if (num + 2) % j == 0:
                break
        else:
            print(f"({num}, {num+2})")