const mergeSortedArrays = (arr1: number[], arr2: number[]) => {
    //! while 루프가 동일한 결과를 처리하므로 없어도 괜찮아.
    // if (!arr1.length) return arr2
    // if (!arr2.length) return arr1

    let left = 0, right = 0
    const mergedArr: number[] = []

    // start arr1 i = left 0, arr2 right, compare both
    // then compare next L or R with L+1 or R+1
    // move 2 pointers til at the end

    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] <= arr2[right]) {
            mergedArr.push(arr1[left])
            left++
        } else {
            mergedArr.push(arr2[right])
            right++
        }
    }

    // if (left < arr1.length) {
    //     mergedArr.push(...arr1.slice(left))
    // } else if (right < arr2.length) {
    //     mergedArr.push(...arr2.slice(right))
    // }

    //! slice로 잘라서 새로운 배열을 생성하는 과정을 줄여 공간 복잡도를 약간 개선할 수 있어.
    while (left < arr1.length) {
        mergedArr.push(arr1[left])
        left++
    }

    while (right < arr2.length) {
        mergedArr.push(arr2[right])
        right++
    }

    return mergedArr

    // T m + n, S n

    // 시간 복잡도: O(m + n)
    // 두 배열의 모든 요소를 한 번씩 비교하고 복사하므로.
    // 공간 복잡도: O(m + n)
    // 결과 배열에 두 배열의 모든 요소를 저장하므로.

}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([0, 2, 4], [1, 3, 5])); // [0, 1, 2, 3, 4, 5]
console.log(mergeSortedArrays([], [1, 2, 3]));        // [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], []));        // [1, 2, 3]