/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let current = nums[0];
    let max = current;

    for (var i = 1; i < nums.length; i++) {
        if (current + nums[i] < nums[i]) {
            current = nums[i]
            if (current > max) {
                max = current;
            }
            continue;
        }

        current += nums[i];

        if (current > max) {
            max = current;
        }
    }

    return max;
};