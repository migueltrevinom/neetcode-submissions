def print_first_char(word: str) -> None:
    if (word and word[0]):
        print(word[0])

def print_second_char(word: str) -> None:
    if (word and word[1]):
        print(word[1])

def print_last_char(word: str) -> None:
    if (len(word)):
        print(word[len(word) -1])


# do not modify below this line
print_first_char("hello")
print_second_char("hello")
print_last_char("hello")

print_first_char("yay")
print_second_char("yay")
print_last_char("yay")
