const isAnagramMap = (s: string, t: string) => {
    //!
    if (s.length !== t.length) return false

    // hashmap
    let stringMap: Record<string, number> = {}
    const charCount: { [key: string]: number } = {};

    for (const c of s) {
        stringMap[c] = (stringMap[c] || 0) + 1
    }

    for (const c of t) {
        // stringMap[c] = (stringMap[c] || 0) - 1

        //!
        if (!stringMap[c]) return false

        stringMap[c]--
    }

    // for (const key in stringMap) {
    //     if (stringMap[key] !== 0) {
    //         return false
    //     }
    // }

    return true
}

console.log(isAnagramMap("anagram", "nagaram")); // true
console.log(isAnagramMap("rat", "car"));         // false
console.log(isAnagramMap("aacc", "ccac"));       // false


function isAnagramSorted(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false; // 길이가 다르면 애너그램이 아님
    }

    return s.split("").sort().join("") === t.split("").sort().join("");
}

// 테스트
console.log(isAnagramSorted("anagram", "nagaram")); // true
console.log(isAnagramSorted("rat", "car"));         // false
console.log(isAnagramSorted("aacc", "ccac"));       // false

// 정렬 풀이:

// 구현이 간단하고 직관적.
// O(n log n) 시간 복잡도 때문에 문자열이 길면 느려질 수 있음.

// 해시맵 풀이:

// 효율적이고 O(n) 시간 복잡도로 대규모 데이터 처리에 적합.
// 추가 메모리 사용(O(n))이 필요.
