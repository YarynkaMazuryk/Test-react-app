export const findAndRemoveElement = (array, deletedUserId) => {
    return array.filter(user => user._id !== deletedUserId);
};