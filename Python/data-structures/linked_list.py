from dataclasses import dataclass, field


@dataclass
class Node:
    data: None
    next_node: None = field(init=False, default=None, repr=False)


@dataclass
class Linked_list:
    """
    Singly linked list, made using dataclass
    """

    head: Node = None

    def is_empty(self):
        return self.head == None

    def size(self):
        """
        Returns the number of nodes in the list
        """
        current = self.head
        count: int = 0

        while current:  # == current != None
            count += 1
            current = current.next_node
        return count

    def add(self, data):
        """
        Adds new Node containing data at head of the list.
        Takes O(1) time
        """
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

    def search(self, key):
        """
        Search for the first node containing data that matches the key.
        Returns the node or `None` if not found.
        Takes O(n) time
        """
        current = self.head

        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node
        return None

    def insert(self, data, index):
        """
        Inserts a new Node containing data at index position.
        Insertion takes O(1) time but finding node at insertion point takes O(n) time.
        Takes overall O(n) time.
        """
        if index == 0:
            self.add(data)

        if index > 0:
            new = Node(data)

        position = index
        current = self.head

        while position > 1:
            current = current.next_node
            position -= 1

        prev_node = current
        next_node = current.next_node

        prev_node.next_node = new
        new.next_node = next_node

    def remove(self, key):
        """
        Removes Node containing data that matches the key.
        Returns the node or `None` if key doesn't exist.
        Takes O(n) time
        """
        current = self.head
        prev = None
        found = False

        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next_node
            elif current.data == key:
                found = True
                prev.next_node = current.next_node
            else:
                prev = current
                current = current.next_node

        return current

    def node_at_index(self, index):
        if index == 0:
            return self.head
        else:
            current = self.head
            position = 0

            while position < index:
                current = current.next_node
                position += 1

            return current

    def __repr__(self):
        """
        Return a string representation of the list.
        Takes O(n) time.
        """
        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append(f"[Head: {current.data}]")
            elif current.next_node is None:
                nodes.append(f"[Tail: {current.data}]")
            else:
                nodes.append(f"[{current.data}]")

            current = current.next_node
        return "-> ".join(nodes)