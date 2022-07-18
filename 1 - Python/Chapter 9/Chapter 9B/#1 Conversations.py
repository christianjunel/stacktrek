
class Conversations:
    def __init__(self):
        self.expected_messages = []
        self.expected_converstation = {}

    def add_message(self, message):
        self.message = message
        contact_number = getattr(self.message, "sender_contact_number")
        message_ = getattr(self.message, "text")
       
        if len(self.expected_converstation) == 0:
            self.expected_messages.append(message_)
            self.expected_converstation[contact_number] = self.expected_messages
        elif contact_number in self.expected_converstation:
            add_message = [message_]
            # self.expected_messages.append(message_)
            self.expected_converstation[contact_number] = self.expected_converstation[contact_number] + add_message
        else:
            self.expected_messages = []
            self.expected_messages.append(message_)
            self.expected_converstation[contact_number] = self.expected_messages
        # return self.expected_converstation
          

    def display_conversations(self):
        return self.expected_converstation

    def search(self, contact_number):
        
        if contact_number in self.expected_converstation:
            return self.expected_converstation[contact_number]
        else:
            return self.expected_converstation[contact_number]
        


class Message:
    def __init__(self, sender_contact_number, text):
        self.sender_contact_number = sender_contact_number
        self.text = text 

message1 = Message("09089080601", "hi")
message2 = Message("09089080601", "good morning")
message3 = Message("09089080602", "good afternoon")

conversations = Conversations()
conversations.add_message(message1)
conversations.add_message(message2)
conversations.add_message(message3)

print(conversations.display_conversations())
print(conversations.search("09089080605"))

# print(message1.display_conversations())
