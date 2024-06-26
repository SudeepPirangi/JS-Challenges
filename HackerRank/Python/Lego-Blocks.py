# You have an infinite number of 4 types of lego blocks of sizes given as (depth x height x width):

# d	h	w
# 1	1	1
# 1	1	2
# 1	1	3
# 1	1	4
# Using these blocks, you want to make a wall of height n and width m. Features of the wall are:

# - The wall should not have any holes in it.
# - The wall you build should be one solid structure, so there should not be a straight vertical break across all rows of bricks.
# - The bricks must be laid horizontally.

# How many ways can the wall be built?

# Example

# n = 2
# m = 3
# The height is 2 and the width is 3. There are 9 valid permutations in all.

# Function Description

# Complete the legoBlocks function in the editor below.

# legoBlocks has the following parameter(s):

# int n: the height of the wall
# int m: the width of the wall
# Returns
# - int: the number of valid wall formations modulo (10⁹+7)

# Input Format

# The first line contains the number of test cases t.

# Each of the next t lines contains two space-separated integers n and m.

# Sample Input

# STDIN   Function
# -----   --------
# 4       t = 4
# 2 2     n = 2, m = 2
# 3 2     n = 3, m = 2
# 2 3     n = 2, m = 3
# 4 4     n = 4, m = 4

# Sample Output

# 3  
# 7  
# 9  
# 3375


# I didn't understand the logic in this program
# or rather I did not put any interest in solving this problem.

def legoBlocks(n, m):
    MOD = (10**9 +7)

    # Step 1: O(W)       
    # The number of combinations to build a single row
    # As only four kinds of sizes, so
    # base case: 
    # if width is 0, combination is 1
    # if width is 1, combination is 1
    # if width is 2, combination is 2
    # if width is 3, combination is 4
    row_combinations = [1, 1, 2, 4]
    
    # Build row combinations up to current wall's width
    while len(row_combinations) <= m: 
        row_combinations.append(sum(row_combinations[-4:]) % MOD)
    
    # Step 2: O(W)
    # Compute total combinations 
    # for constructing a wall of height N of varying widths
    total = [pow(c, n, MOD) for c in row_combinations]
    
    # Step 3: O(W^2)
    # Find the number of unstable wall configurations 
    # for a wall of height N of varying widths
    unstable = [0, 0]
    
    # Divide the wall into left part and right part,
    # and calculate the combination of left part and right part.
    # From width is 2, we start to consider about violation.
    for i in range(2, m + 1):
        # i: current total width
        # j: left width
        # i - j: right width
        # f: (left part - previous vertical violation)*right part
        f = lambda j: (total[j] - unstable[j]) * total[i - j]
        result = sum(map(f, range(1, i)))
        unstable.append(result % MOD)
    
    # Print the number of stable wall combinations
    return (total[m] - unstable[m]) % MOD

print(legoBlocks(2, 2)); # 3
print(legoBlocks(3, 2)); # 7
print(legoBlocks(2, 3)); # 9
print(legoBlocks(4, 4)); # 3375