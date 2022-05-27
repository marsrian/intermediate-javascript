// Break Practice:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
for (let i = 0; i < nums.length; i++) {

    if (nums[i] > 3) {
        break;
    }
    console.log(nums[i]);
}

// Continue Practice:
const ages = [1, 2, 3, -4, 5, -6, 7, 8, -9, 23];
for (let i = 0; i < ages.length; i++) {

    if (ages[i] < 0) {
        continue;
    }

    console.log(ages[i]);
}