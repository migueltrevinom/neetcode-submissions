def first_n_characters(string: str, position: int) -> str:
    if (position > len(string)):
        return ""
    else:
        return string[:position]

def last_n_characters(string: str, position: int) -> str:
    if (position > len(string) or position < 0):
        return ""
    else:
        return string[len(string) - position:]


# do not modify below this line
print(first_n_characters("NeetCode", 3))
print(first_n_characters("NeetCode", 4))
print(first_n_characters("NeetCode", 8))

print(last_n_characters("NeetCode", 3))
print(last_n_characters("NeetCode", 4))
print(last_n_characters("NeetCode", 8))
