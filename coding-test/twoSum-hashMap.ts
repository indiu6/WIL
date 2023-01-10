function twoSum(nums: number[], target: number): number[] {
  // const result: number[] = []

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     const firstElement = nums[i]
  //     const secondElement = nums[j]

  //     if (firstElement + secondElement === target) {
  //       result[i] = i
  //       result[j] = j
  //     }
  //   }
  // }

  // return result

  //! solution [3,2,4], 6
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }

  return []
}
