export const clearUserID = () => localStorage.removeItem('UID', null)

export function getUserID () {
  console.log('getUSERID called')
  console.log(`${localStorage.getItem('UID')}`)

  return localStorage.getItem('UID')}

export function setUserID(userId) {
  console.log('setUID called = ' + userId)
  localStorage.setItem('UID', userId)
  }
