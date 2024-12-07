class ListNode1 {
    val: number;
    next: ListNode1 | null;

    constructor(val?: number, next?: ListNode1 | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function mergeTwoLists(list1: ListNode1 | null, list2: ListNode1 | null): ListNode1 | null {
    const dummy = new ListNode1(-1); // 결과 리스트의 더미 헤드
    let current = dummy

    const visited = new Set<ListNode1>(); // 방문한 노드를 추적

    while (list1 && list2) {
        if (visited.has(list1) || visited.has(list2)) {
            throw new Error("Cycle detected in input lists");
        }

        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    current.next = list1 ? list1 : list2

    return dummy.next
}

const list1 = new ListNode1(1, new ListNode1(2, new ListNode1(4)));
const list2 = new ListNode1(1, new ListNode1(3, new ListNode1(4)));

console.log(mergeTwoLists(list1, list2));
console.log(JSON.stringify(mergeTwoLists(list1, list2), null, 2));
