def remove_fourth_character(word: str) -> str:
    if len(word) < 4:
        return word
    else: 
        return word[:3] + word[4:]


# do not modify below this line
print(remove_fourth_character("NeetCode"))
print(remove_fourth_character("Hello"))
