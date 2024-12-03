const strStrIndexOf = (haystack: string, needle: string) => {
    return haystack.indexOf(needle)
}

console.log(strStrIndexOf("sadbutsad", "sad")); // 0
console.log(strStrIndexOf("leetcode", "leeto")); // -1
console.log(strStrIndexOf("hello", "ll")); // 2


const strStr = (haystack: string, needle: string) => {
    const needleLen = needle.length
    const haystackLen = haystack.length

    for (let i = 0; i < haystackLen - needleLen; i++) {
        if (haystack.substring(i, needleLen + i) === needle) {
            return i
        }
    }

    return -1
}