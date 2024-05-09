const removeFromArray = function (array, ...args) 
{
    // The first argument is the array
    const array = args[0];

    // Remaining arguments are the items to remove
    const itemsToRemove = args.slice(1);

    // Return a filtered array, excluding any items in `itemsToRemove`
    return array.filter(item => !itemsToRemove.includes(item));
}
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
