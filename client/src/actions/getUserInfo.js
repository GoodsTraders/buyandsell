export const getUserInfo = (user) => {
    return {
        type: "GET_USER",
        payload: user
    }
}