const myWords = [
    'zz',
    'zb',
    'Hello',
    'name',
    'age',
    'za',
];
function getFirstValue(myArray)
{
    let sortedArray = myArray.sort();
    return sortedArray[myArray.length -1]
}
console.log(getFirstValue(myWords));