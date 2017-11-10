export const toggleAuth = (isAuth) => {
    return {
        type: "TOGGLE_AUTH",
        payload: isAuth
    }
};
