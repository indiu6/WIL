const intersection = (nums1: number[], nums2: number[]) => {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    return Array.from(set1).filter((num) => set2.has(num))
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]

// 1. 집합(Set)을 이용한 풀이
// 배열을 Set으로 변환하여 중복을 제거.
// 두 집합의 교집합을 구해 반환.
// 시간 복잡도: O(n + m) (n과 m은 각 배열의 길이)
// 2. 해시맵(Hash Map)을 이용한 풀이
// 한 배열의 요소를 해시맵에 저장.
// 다른 배열을 순회하며 공통 요소를 찾음.
// 시간 복잡도: O(n + m)

function intersectionWithMap(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, boolean>();
    const result: number[] = [];

    // 첫 번째 배열의 요소를 해시맵에 추가
    for (const num of nums1) {
        map.set(num, true);
    }

    // 두 번째 배열에서 교집합 찾기
    for (const num of nums2) {
        if (map.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}