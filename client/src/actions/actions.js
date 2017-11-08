export const toggleAuth = (isAuth) => {
    console.log('Toggling Authentication', isAuth);
    return {
        type: "TOGGLE_AUTH",
        payload: isAuth
    }
}