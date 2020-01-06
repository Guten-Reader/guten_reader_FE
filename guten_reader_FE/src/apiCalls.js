export const getBooks = async(userId) => {
  const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books`)
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const getBookText = async(userId, bookId) => {
  const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books/${bookId}`)
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}
