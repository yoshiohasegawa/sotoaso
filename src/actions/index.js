export const login = () => {
    return {
        type: "LOGIN"
    }
  }
  
export const logout = () => {
    return {
        type: "LOGOUT"
    }
}
      
export const saveUserId = (userId) => {
    return {
        type: "SET_USERID",
        payload: userId
    }
}

export const removeUserId = () => {
    return {
        type: "ERASE_USERID"
    }
}