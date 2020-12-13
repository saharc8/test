// const name = document.getElementById("input");

// change = () => {
//     document.getElementById("myP").innerHTML = "hello, " + name.value
// };

var nums = [1, 3, 6, 4, 2, 7];
//var sorted = [];
//sorted = nums.sort(function(a, b) { return a - b });
//console.log("sorted is " + sorted);

miss_num(nums);

function miss_num(nums) {
    for (i = 1; i < nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            console.log("missing num is " + (i));
        }
    }
}

// for (i = 1; i < nums.length; i++) {
//     if (nums[i] - nums[i - 1] != 1) {
//         console.log("missing num is " + (i + 1));
//     }
// };
// sorted = sort_nums(nums);

// function sort_nums(nums) {
//     nums.sort(function(a, b) { return a - b });

// }

//sorted = (nums) => nums.sort(function(a, b) { return a - b });


//console.log("sorted is " + sorted);

class Animal {
    // let name;
    // let height;
    // let weight;

    constructor(name, height, weight) {
        console.log("new animal", name)
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    nameLength() {
        return this.name.length;
    }
}

let dog = new Animal("chap", 10, 40);

console.log(dog.nameLength());

Animal.planet = "earth"

console.log(dog.constructor.planet);