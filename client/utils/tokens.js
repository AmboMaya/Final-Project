export const clearToken = () => localStorage.removeItem('ACCESS-TOKEN', null)

export const getToken = () => localStorage.getItem('ACCESS-TOKEN')

export const setToken = token => {
  console.log(token)
  localStorage.setItem('ACCESS-TOKEN', token.token  )
  localStorage.setItem('UID', token.userId)
}
