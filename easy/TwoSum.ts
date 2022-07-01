function twoSum(nums: number[], target: number): number[] {
    let otherSum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        otherSum = target - nums[i];
        if (nums.indexOf(otherSum) !== -1) {
            if (nums.indexOf(otherSum) === i) {
                if (nums.indexOf(otherSum, (i + 1)) !== -1) {
                    return [nums.indexOf(otherSum),
                        nums.indexOf(otherSum, nums.indexOf(otherSum) + 1)];
                }
                continue;
            return [i, nums.indexOf(otherSum)]; 
            }
        return [i, nums.indexOf(otherSum)];                                 
        }
    }
};
