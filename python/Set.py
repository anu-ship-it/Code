
#not in
u1 = {1, 2, 3, 4, 5}
print(6 not in u1)  # Output: True



#elemeny in set_name
u1 = {1, 2, 3, 4, 5}
print(3 in u1)  # Output: True



#sum()
y1 = {1, 2, 3, 4, 5}
y2 = sum(y1)
print("Sum of elements in set:", y2)

#remove()
y1 = {1, 2, 3, 4, 5}
y1.remove(3)
print("Set after removing element:", y1)


#len(set_name)
y1 = {1, 2, 3, 4, 5}
print(len(y1))


#max(set_name)
y1 = {1, 2, 3, 4, 5}
print(max(y1))


#min(set_name)
y1 = {1, 2, 3, 4, 5}
print(min(y1))



#set_name.add(element)
r1 = {1, 2, 3, 4, 5}
t2= r1.add(6)
print("Set after adding element:", r1)



#set_name.update([elements to update])
e1= {1,2,3,4,5}
e2 = {6,7,8,5,10}
e1.update(e2)
print("Updated set:", e1)




# difference  
q1 = {1, 2, 3, 4, 5}
q2 = {4, 5, 6, 7, 8}
w2 = q1.difference(q2)
print("Difference of q1 and q2:", w2)




#Symmetric difference
s1 = {1,2,3,5}
s2={3,2,1,6}

print(s1 ^ s2)
print(s1.difference(s2))

#Intersection
A1 = {1,2,3,4,5}
A2 = {4,5,6,7,8}
B2 = A1.intersection(A2)
print("Intersection of A1 and A2:", B2)

#Union
c1 = {1,2,3,4,5}
c2 = {4,5,6,7,8,5}
V2 = c1.union(c2)
print("Union of A1 and A2:", V2)