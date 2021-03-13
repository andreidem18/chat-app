export const types = {
    addRoom: "ADD_ROOM",
    quitRoom: "QUIT_ROOM",
    login: "SET_USER",
    logOut: "LOG_OUT"
}
export const addRoom = (room) => ({
    type: types.addRoom,
    payload: room
})
export const quitRoom = () => ({
    type: types.quitRoom
})
export const login = (data) => ({
    type: types.login,
    payload: data
})
export const logOut = () => ({
    type: types.logOut
})