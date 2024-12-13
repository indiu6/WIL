using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

class Program
{
    static bool IsPalindrome(string s)
    {
        // 알파벳과 숫자만 남기고 소문자로 변환
        string cleaned = Regex.Replace(s, "[^a-zA-Z0-9]", "").ToLower();

        // 정제된 문자열이 뒤집었을 때 동일한지 확인
        char[] charArray = cleaned.ToCharArray();
        // charArray.Reverse();
        Array.Reverse(charArray);
        string reversed = new string(charArray);

        return cleaned == reversed;
    }

    static void Main()
    {
        // 테스트
        Console.WriteLine(IsPalindrome("A man, a plan, a canal: Panama")); // true
        Console.WriteLine(IsPalindrome("race a car")); // false
        Console.WriteLine(IsPalindrome(" ")); // true
    }
}
