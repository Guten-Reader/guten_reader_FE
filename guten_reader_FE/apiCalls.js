export const getBooks = async() => {
  const response = await fetch('https://guten-server.herokuapp.com/api/v1/users/4/books')
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}
