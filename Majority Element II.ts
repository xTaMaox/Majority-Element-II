function majorityElement(nums: number[]): number[] {

let results: number[] = [];
let numLength: number = nums.length/3;
let map = new Map();

for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
        let getCount: number = map.get(nums[i]);
        map.set(nums[i], getCount + 1);
    } else {
        map.set(nums[i], 1);
    }
}

let keys: number[] = Array.from(map.keys());

for(let i = 0; i < keys.length; i++){
    if(map.get(keys[i]) > numLength){
        results.push(keys[i]);
    }
}
return results;

};