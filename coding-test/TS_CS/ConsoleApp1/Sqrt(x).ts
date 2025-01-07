function mySqrt(x: number): number {
    if (x === 0 || x === 1) {
        return x; // 0과 1의 제곱근은 자기 자신
    }

    let start = 0, end = x, result = 0;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        // mid^2 계산 시 오버플로우 방지
        if (mid * mid === x) {
            return mid;
        }

        if (mid * mid < x) {
            result = mid; // 가능한 정답 저장
            start = mid + 1; // 오른쪽 탐색
        } else {
            end = mid - 1; // 왼쪽 탐색
        }
    }

    return result;
}
