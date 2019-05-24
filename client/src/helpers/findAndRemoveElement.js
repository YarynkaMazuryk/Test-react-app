export const findAndRemoveElement = (array, id) => {
    console.log('find and remove', array, id);
    for (let i=0; i<array.length; i++) {
        if (array[i]._id === id) {
            console.log(array[i]);
            array.splice(i, 1);
        }
    }
    return array;
};