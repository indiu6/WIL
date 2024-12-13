const findDuplicates = (nums) => {
  const numCount = new Map() // 숫자의 빈도를 기록할 해시맵
  const duplicates = [] // 중복된 요소를 저장할 배열

  for (const num of nums) {
    if (numCount.has(num)) {
      if (numCount.get(num) === 1) duplicates.push(num)
      numCount.set(num, numCount.get(num) + 1)
    } else {
      numCount.set(num, 1)
    }
  }

  //   for (const [key, count] of numCount) {
  //     if (count > 1) duplicates.push(key)
  //   }

  return duplicates
}

// 입력:
let nums = [4, 3, 2, 7, 8, 2, 3, 1]
// 출력:
// [2, 3]
console.log('dup :>> ', findDuplicates(nums))

// 입력:
// nums = [1, 2, 3, 4, 5]
// 출력:
// [] (중복 없음)
