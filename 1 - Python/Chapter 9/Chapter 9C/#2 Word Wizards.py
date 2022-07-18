class WordWizards:
    def __init__(self, player1, player2, prefix):
        
        self.player1 = player1
        self.player2 = player2
        self.prefix = prefix.lower()  
        
    def player_points(self, player, opponent):
        self.string_counter = ""
        self.player = player
        self.opponent = opponent
        self.words_set_converted_player = {x.lower() for x in self.player.words_set}
        self.words_set_converted_opponent = {x.lower() for x in self.opponent.words_set}

        for items in self.words_set_converted_player.copy():
            if items.startswith(self.prefix) == False or items.isalpha() == False or items == self.prefix or len(items) <= len(self.prefix):
                self.words_set_converted_player.remove(items)
        for items in self.words_set_converted_opponent.copy():
            if items.startswith(self.prefix) == False or items.isalpha() == False or items == self.prefix or len(items) <= len(self.prefix):
                self.words_set_converted_opponent.remove(items)
        for items in (self.words_set_converted_player - self.words_set_converted_opponent):
            self.string_counter += items

        return len(self.string_counter) #, len(self.string_counter_p2)

    def winner(self):

        self.string_counter_p1 = ""
        self.string_counter_p2 = ""

        for items in (self.words_set_converted_player - self.words_set_converted_opponent):
            self.string_counter_p1 += items
        for items in (self.words_set_converted_opponent - self.words_set_converted_player):
            self.string_counter_p2 += items

        if (len(self.string_counter_p1) == len(self.string_counter_p2) or
           len(self.string_counter_p1) == 0 and len(self.string_counter_p2) == 0):
            return f"draw"
        elif len(self.string_counter_p1) > len(self.string_counter_p2):
            return self.player.name
        else:
            return self.opponent.name


class Player:
    def __init__(self, name):
        self.name = name
        self.words_set = set()
        
    def add_word(self, word):
        self.words_set.add(word)        

player1 = Player("John")
player2 = Player("Sam")

word_wizards = WordWizards(player1, player2, "ex")
# player1.add_word("des")
# player1.add_word("des")
# player2.add_word("di")
# player2.add_word("di")
player1.add_word("extraordinaire")
player1.add_word("extracorporeal")
player2.add_word("exceptionalism")
player2.add_word("existentialism")
player2.add_word("ex")
# player1.add_word("misdemeanor")
# player1.add_word("mischievous")
# player1.add_word("miscarriage")
# player1.add_word("misused")

# player2.add_word("mislead")
# player2.add_word("misplace")
# player2.add_word("misdemeanor")
# player2.add_word("mischievous")
print(word_wizards.player_points(player1, player2))
print(word_wizards.player_points(player2, player1))
print(word_wizards.winner())

# def testtestf___DS___with_incorrect_words(self):
# word_wizards = WordWizards(self.player3, self.player4, "Dis")

# self.player3.add_word("DIslike")
# self.player3.add_word("disappear")
# self.player3.add_word("deal")
# self.player3.add_word("disqualify")

# self.player4.add_word("disappoint")
# self.player4.add_word("disconnect")
# self.player4.add_word("dessert")

# self.assertEqual(26, word_wizards.player_points(self.player3, self.player4))
# self.assertEqual(20, word_wizards.player_points(self.player4, self.player3))
# self.assertEqual("Dave", word_wizards.winner())