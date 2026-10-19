from typing import List

def read_integers() -> List[int]:
    user_input = input()
    values = user_input.split(",")
    for key in range(len(values)):
        values[key] = int(values[key])
    
    return values

# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())
