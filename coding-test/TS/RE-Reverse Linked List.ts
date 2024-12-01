class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

const reverseList = (head: ListNode | null) => {
    let prev: ListNode | null = null
    let current = head

    while (current !== null) {
        const next = current.next; // 다음 노드 저장
        current.next = prev; // 현재 노드의 방향을 뒤집음
        prev = current; // prev를 현재 노드로 이동
        current = next; // current를 다음 노드로 이동
    }

    return prev; // prev가 새로운 head가 됨
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(head)); // [5, 4, 3, 2, 1]


function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head; // base case
    }

    const reversedHead = reverseListRecursive(head.next); // 재귀적으로 뒤집음
    head.next.next = head; // 현재 노드를 뒤로 연결
    head.next = null; // 현재 노드의 다음을 끊음

    return reversedHead; // 뒤집어진 리스트의 새로운 head 반환
}

// 테스트
const headRecursive = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseListRecursive(headRecursive)); // [5, 4, 3, 2, 1]
