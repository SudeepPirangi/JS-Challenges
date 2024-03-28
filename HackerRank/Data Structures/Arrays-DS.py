# https://www.hackerrank.com/challenges/arrays-ds

# Reverse the order of array

def reverseArray(a):
    # Write your code here
    print(a[::-1]) # another solution
    a.reverse()
    return a

array = [1, 3, 4, 9]
reverse = reverseArray(array)
print(" ".join(map(str, reverse)))

def staircase(n):
    for i in range(n, 0, -1):
        # print(" "*(n - i), end="")
        print("*"*i)

staircase(4)