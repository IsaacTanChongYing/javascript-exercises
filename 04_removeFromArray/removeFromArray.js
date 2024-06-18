const removeFromArray = function (array, ...args) 
{
    // The first argument is the array
    const arr = array

    // Remaining arguments are the items to remove
    const itemsToRemove = args

    // Return a filtered array, excluding any items in `itemsToRemove`
    return arr.filter(item => !itemsToRemove.includes(item));
}
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
