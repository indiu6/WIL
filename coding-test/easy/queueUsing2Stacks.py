# Implement the MyQueue class:

# void push(int x) Pushes element x to the back of the queue.
# int pop() Removes the element from the front of the queue and returns it.
# int peek() Returns the element at the front of the queue.
# boolean empty() Returns true if the queue is empty, false otherwise.
class MyQueue:
    def __init__(self):
        self.in_stk = []
        self.out_stk = []

    # Push element x to the back of queue...
    def push(self, x) -> None:
        self.in_stk.append(x)

    # Remove the element from the front of the queue and returns it...
    def pop(self) -> int:
        self.peek()
        return self.out_stk.pop()

    # Get the front element...
    def peek(self) -> int:
        if not self.out_stk:
            while self.in_stk:
                self.out_stk.append(self.in_stk.pop())
        return self.out_stk[-1]

    # Return whether the queue is empty...
    def empty(self) -> bool:
        return not self.in_stk and not self.out_stk


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
