class BiscuitBox: 

	def __init__(self, biscuits:str): 
		self.biscuits = biscuits
		

	def get_biscuit_type(self): 
		biscuits2 = list(x.lower() for x in self.biscuits)	
		# return biscuits2
		for items in biscuits2:
			if biscuits2.count(items.lower()) > 1:
				return self.biscuits[biscuits2.index(items)]
		return "None"
		
box = BiscuitBox(["rich tea", "marie", "pop Tarts", "oates", "plain", "plain"])
print(box.get_biscuit_type())
box = BiscuitBox(["marie", "pop Tarts", "oates", "PLAin", "pLain"])
print(box.get_biscuit_type())
box = BiscuitBox(["marie"])
print(box.get_biscuit_type())