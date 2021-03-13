export const types = {
    setRoom: "SET_ROOM",
    setUser: "SET_USER"
}
export const setRoom = (data) => ({
    type: types.setRoom,
    payload: data
})
export const setUser = (data) => ({
    type: types.setUser,
    payload: data
})