def count_reactions(reactions:str): 
    reactions_dict = {}
    for items in sorted(reactions):
        if items.lower() in reactions_dict:
            reactions_dict[items.lower()] += 1
        else:
            reactions_dict[items.lower()] = 1
    return reactions_dict


print(count_reactions(["angry", "Care", "like", "like"]))
print(count_reactions(["angry", "liKe", "care",  "love"]))

