class FindPath:
    def __init__(self, root):
        self.root = root

    def insert(self, key):
        self.check_insertion(self.root, key)

    def check_insertion(self, node, element):
        
        if element < node.data:
            if node.left is None:
                node.left = Node(element)
            else:
                self.check_insertion(node.left, element)
        elif element >= node.data:
            if node.right is None:
                node.right = Node(element)
            else:
                self.check_insertion(node.right, element)
        
    def search(self, root, key):
        traversal_list = []
        if root == None: #checks if node is empty
            return []
        # base cases, don't forget to write them first
        # base cases halt the recursive method in order for it to not run infinitely
        if root.data == key:
          traversal_list.append(key)
          return traversal_list
        # check if the current data is greater than the key, if so, we traverse the left subtree
        elif root.data >= key:
          left_child = self.search(root.left, key)
          # we added this case in order to respond to the special case where there's no "key" value in the tree
          # so take note on how the recursive calls are made
          # you can try to draw them in scratch in order to know what outputs are made/given
          if key not in left_child:
            return []
          else:
            traversal_list.append(root.data)
            return traversal_list + left_child
        # else, we traverse the right subtree
        else: # if root.data > key
          # insert return statement here, again, make sure to search to the correct node
          right_child = self.search(root.right, key)
          if key not in right_child: 
            return []
          else:
            traversal_list.append(root.data)
            return traversal_list + right_child
        # if the data of current node is equal to the key, then proceed to build the base case

    #def check_root(self):
        #return self.root.data
class Node:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None

root = Node(3) #Declaring the root
tree = FindPath(root) 
tree.insert(5)
tree.insert(4)
tree.insert(2)
print(tree.search(root, 4))



# tree.insert(4)