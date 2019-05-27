export const findAndUpdateUser = (allUsers, updatedUser) => {
    const newUsers = [];
    allUsers.map((user) => {
        if (user._id === updatedUser._id) {
            newUsers.push(updatedUser);
        } else {
            newUsers.push(user);
        }
    });
    return newUsers;
};