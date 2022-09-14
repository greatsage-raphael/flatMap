// An array is a data structure that can contain multiple values.

// The values can be of any type, including other arrays.

// The values in an array are ordered, and each value has an index.

// The first value in an array has an index of 0, the second value has an index of 1, and so on.

// Arrays are useful for storing lists of data.

// For example, you might have an array of the names of your friends.

// You can access the values in an array using bracket notation.

// The index of the value you want to access goes between the brackets.

// For example, to get the first value in an array, you would use the following code:

 const friends = ['Sarah', 'Greg', 'Cindy', 'Jeff'];

console.log(friends[0]);

// Output: Sarah

// To get the third value in an array, you would use the following code:

console.log(friends[2]);

// Output: Cindy

// Arrays have a length property, which allows you to see how many items are in an array.

// For example, the friends array in the example above has a length of 4.

// You can access this length property with the following code:

console.log(friends.length);

// Output: 4

// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.

// For example, you can add an item to the end of an array using the .push() method.

// The following code adds the item 'Matt' to the end of the friends array:

friends.push('Matt');
console.log(...friends) //spread operator to print out all the values in the array

// Output: Sarah Greg Cindy Jeff Matt

// You can remove an item from the end of an array using the .pop() method.

// The following code removes the last item in the friends array:

friends.pop();
console.log(friends);

// Output: ['Sarah', 'Greg', 'Cindy', 'Jeff']

// Arrays have many methods that perform different tasks, such as .slice() and .shift(), which copy and remove items from an array, respectively.

// The following code copies the first two items in the friends array:

const friendsCopy = friends.slice(0, 2);

// The following code removes the first item in the friends array:

friends.shift();

// Arrays have many methods that perform different tasks, such as .splice() and .unshift(), which add and remove items anywhere in an array, respectively.

// The following code adds the item 'Matt' to the beginning of the friends array:

friends.unshift('Matt');

// The following code removes the second and third items in the friends array:

friends.splice(1, 2);

// Arrays have many methods that perform different tasks, such as .indexOf() and .join(), which search and combine items in an array, respectively.

// The following code finds the index of the item 'Cindy' in the friends array:

friends.indexOf('Cindy');

// The following code creates a string from the items in the friends array:

friends.join(' and ');

// Arrays have many methods that perform different tasks, such as .includes() and .reverse(), which check if an item exists and reverse the order of the items in an array, respectively.

// The following code checks if the item 'Mary' is in the friends array:

friends.includes('Mary');

// The following code reverses the order of the items in the friends array:

friends.reverse();

// Arrays have many methods that perform different tasks, such as .sort() and .forEach(), which sort the items in an array and execute the same code on every item in an array, respectively.

// The following code sorts the items in the friends array:

friends.sort();

// The following code prints out each item in the friends array:

friends.forEach(friend => console.log(friend));

// Output: Cindy Greg Jeff Matt Sa

// Arrays have many methods that perform different tasks, such as .map() and .filter(), which create a new array based on the items in an existing array and create a new array with only the items that return true in the callback function, respectively.

// The following code creates a new array with the first letter of each item in the friends array:

const friendsFirstLetters = friends.map(friend => friend[0]);
console.log(friendsFirstLetters);


// The following code creates a new array with only the items that have a length of four in the friends array:

const friendsWithFourLetters = friends.filter(friend => friend.length === 4);

// Arrays have many methods that perform different tasks, such as .reduce() and .every(), which reduce all items in an array to a single value and check if every item in an array returns true in the callback function, respectively.

// The following code reduces all items in the friends array to a single value:

const friendsString = friends.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 'Friends: ');

// The following code checks if every item in the friends array has a length of four:

const allFriendsHaveFourLetters = friends.every(friend => friend.length === 4);

// Arrays have many methods that perform different tasks, such as .some() and .flat(), which check if any item in an array returns true in the callback function and flatten nested arrays into a single array, respectively.

// The following code checks if any item in the friends array has a length of four:

const someFriendsHaveFourLetters = friends.some(friend => friend.length === 4);

// The following code flattens a nested array into a single array:

const nestedArray = [[1], [2, 3]];

const flatArray = nestedArray.flat();
console.log(flatArray)

// Output: [1, 2, 3]

// Arrays have many methods that perform different tasks, such as .flatMap() and .find(), which map each item in an array to a new array and return the first item in an array that returns true in the callback function, respectively.

// The following code maps each item in the friends array to a new array:

const friendsMapped = friends.map(friend => `I am ${friend}.`);

// The following code returns the first item in the friends array that has a length of four:

const friendWithFourLetters = friends.find(friend => friend.length === 4);

// Arrays have many methods that perform different tasks, such as .findIndex() and .fill(), which return the index of the first item in an array that returns true in the callback function and fill all items in an array with a static value, respectively.

// The following code returns the index of the first item in the friends array that has a length of four:

const index = friends.findIndex(friend => friend.length === 4);

// The following code fills all items in the friends array with the value 'Friend':

friends.fill('Friend');
console.log(friends);

// Output: ['Friend', 'Friend', 'Friend', 'Friend']

// Arrays have many methods that perform different tasks, such as .copyWithin() and .entries(), which copy array elements within the array, and return a key/value pair Array Iteration Object, respectively.

// The following code copies array elements within the friends array:

friends.copyWithin(1, 2);

// The following code returns a key/value pair Array Iteration Object for the friends array:
const men = ["collins", "Jordan", "max", "marvin"]

const iteratorObj = men.entries();
console.log(iteratorObj.next().value);

//






