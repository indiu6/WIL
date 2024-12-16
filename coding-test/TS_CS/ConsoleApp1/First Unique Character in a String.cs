using System;
using System.Collections.Generic;

public class Solution {
    public int FirstUniqChar(string s) {
        Dictionary<char, int> charCount = new Dictionary<char, int>();

        // 1. 각 문자의 빈도 계산
        foreach (char c in s) {
            if (charCount.ContainsKey(c)) {
                charCount[c]++;
            } else {
                charCount[c] = 1;
            }
        }

        // 2. 처음으로 등장하는 유일한 문자 찾기
        for (int i = 0; i < s.Length; i++) {
            if (charCount[s[i]] == 1) {
                return i;
            }
        }

        // 3. 유일한 문자가 없는 경우
        return -1;
    }
}

// 테스트
public class Program1 {
    public static void Main() {
        Solution solution = new Solution();
        Console.WriteLine(solution.FirstUniqChar("leetcode")); // 출력: 0
        Console.WriteLine(solution.FirstUniqChar("loveleetcode")); // 출력: 2
        Console.WriteLine(solution.FirstUniqChar("aabb")); // 출력: -1
    }
}
