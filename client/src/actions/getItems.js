export const getItems = (items) => {
    return {
        type: "GET_ITEMS",
        payload: items
    }
}