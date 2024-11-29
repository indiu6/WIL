const twoSum = (nums, target) => {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i]

    if (map.has(comp)) return [map.get(comp), i]
    else map.set(nums[i], i)
  }
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target)) // [0, 1]
