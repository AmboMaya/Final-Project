export const clearUserID = () => localStorage.removeItem('UID', null)

export const getUserID = () => localStorage.getItem('UID')

export const setUserID = uID => localStorage.setItem('UID', uID)
