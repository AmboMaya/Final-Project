export const clearUserID = () => localStorage.removeItem('UID', null)

export const getUserID = () => localStorage.getItem('UID')

export function setUserID(userId) {
  console.log('setUID called = ' + userId)
  localStorage.setItem('UID', userId)
  }
