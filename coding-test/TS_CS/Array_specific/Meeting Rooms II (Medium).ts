const minMeetingRooms = (intervals: number[][]): number => {
    if (intervals.length === 0) return 0

    intervals.sort((a, b) => a[0] - b[0])

    const heap: number[] = [] // 종료 시간을 저장하는 최소 힙
    heap.push(intervals[0][1]) // 첫 번째 회의의 종료 시간 추가

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        // 현재 회의의 시작 시간이 가장 빨리 종료되는 회의의 종료 시간 이상이면 제거
        if (end >= heap[0]) {
            heap.shift()
        }

        // 현재 회의의 종료 시간을 힙에 추가
        heap.push(end)

        // 힙을 다시 최소 힙 구조로 정렬
        heap.sort((a, b) => a - b)
    }

    return heap.length
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2
console.log(minMeetingRooms([[7, 10], [2, 4]]));             // 1


function minMeetingRoomsWithPointers(intervals: number[][]): number {
    if (intervals.length === 0) return 0

    const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b)
    // [0, 5, 15]
    const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b)
    // [10, 20, 30]

    let startPointer = 0
    let endPointer = 0
    let rooms = 0

    while (startPointer < intervals.length) {
        if (startTimes[startPointer] >= endTimes[endPointer]) {
            endPointer++; // 회의 종료 → 회의실 반환
        } else {
            rooms++; // 새로운 회의실 필요
        }
        startPointer++;
    }

    return rooms
}

console.log(minMeetingRoomsWithPointers([[0, 30], [5, 10], [15, 20]])); // 2
console.log(minMeetingRoomsWithPointers([[7, 10], [2, 4]]));             // 1