function mergeAlternately(word1: string, word2: string): string {
    let i = 0, j = 0;
    let result = "";

    // 두 문자열을 번갈아 가며 병합
    while (i < word1.length && j < word2.length) {
        result += word1[i++];
        result += word2[j++];
    }

    // 남은 문자 추가
    if (i < word1.length) {
        result += word1.slice(i);
    }
    if (j < word2.length) {
        result += word2.slice(j);
    }

    return result;
}
