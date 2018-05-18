const evens = [2, 4, 5, 5]

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({ even: v, odd: v + 1 }));


const fives = []
    // Statement bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});

// Lexical this
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}

console.log(odds)
console.log(nums)
console.log(pairs)

console.log(bob.printFriends.name)