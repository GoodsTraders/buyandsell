export const toggleAuth = (isAuth) => {
    return {
        type: "TOGGLE_AUTH",
        payload: isAuth
    }
}

export const navView  = (view) => {
    return {
        type: "NAV_VIEW",
        payload: view
    }
}