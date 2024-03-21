# /**
#  * There is a given list of strings where each string contains only lowercase letters from a - j, inclusive. The set of strings is said to be a GOOD SET if no string is a prefix of another string. In this case, print GOOD SET. Otherwise, print BAD SET on the first line followed by the string being checked.

# Note If two strings are identical, they are prefixes of each other.

# Example

# Here 'abcd' is a prefix of 'abcde' and 'bcd' is a prefix of 'bcde'. Since 'abcde' is tested first, print

# BAD SET  
# abcde

# words - ['ab', bc', 'cd']
# No string is a prefix of another so print

# GOOD SET 
# Function Description
# Complete the noPrefix function in the editor below.

# noPrefix has the following parameter(s):
# - string words[n]: an array of strings

# Prints
# - string(s): either GOOD SET or BAD SET on one line followed by the word on the next line. No return value is expected.

# Input Format
# First line contains n, the size of words[].
# Then next  lines each contain a string, words[i].

# Constraints

# All letters in words[i] are in the range 'a' through 'j', inclusive.

# Sample Input00

# STDIN       Function
# -----       --------
# 7            words[] size n = 7
# aab          words = ['aab', 'defgab', 'abcde', 'aabcde', 'bbbbbbbbbb', 'jabjjjad']
# defgab  
# abcde
# aabcde
# cedaaa
# bbbbbbbbbb
# jabjjjad
# Sample Output00

# BAD SET
# aabcde
#  */

def noPrefix(words):
    # Write your code here
    encoder = dict()
    for s in words:
        tempdict = encoder
        for i,l in enumerate(s):
            if l in tempdict.keys():
                tempdict = tempdict.get(l)
                if tempdict is True or i==len(s)-1: # cases 1 and 2
                    print(f'BAD SET\n{s}')
                    return
            else: # case 3
                if i==len(s)-1:
                    tempdict[l] = True
                else:
                    tempdict[l] = dict()
                    tempdict = tempdict[l]
    print('GOOD SET')

noPrefix([
  "aab",
  "defgab",
  "abcde",
  "aabcde",
  "cedaaa",
  "bbbbbbbbbb",
  "jabjjjad",
]);
