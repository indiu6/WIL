function validPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // 한 문자를 삭제한 경우 회문 여부 확인
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true; // 회문인 경우
}

export function isPalindrome(s: string, left: number, right: number): boolean {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
