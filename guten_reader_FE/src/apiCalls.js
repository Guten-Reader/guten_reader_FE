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

export const getToken = async() => {
  const response = await fetch('https://guten-server.herokuapp.com/api/v1/access_token/1')
  try {
    return response.json()
  } catch {
    throw Error('There was an error getting a token')
  }
}

export const getRecommendation = async(token) => {
  let recommendation = {
    text: "This is a very happy and positive statement.", 
    access_token: token, 
    user_id: 1
  }
  let options = {
    method: 'POST',
    body: JSON.stringify(recommendation),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('https://micro-guten.herokuapp.com/api/v1/recommendation', options)
  try {
    return response.json()
  } catch {
    throw Error('There was an error getting a recommendation')
  }
}

export const postSongToPlayer = async(uri, token) => {
  let uriString = {
    uris: [uri]
  }
  let options = {
    method: 'PUT',
    body: JSON.stringify(uriString),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('https://api.spotify.com/v1/me/player/play', options)
  try {
    return response.json()
  } catch {
    throw Error('There was an error playing this song')
  }
} 

export const updateCurrentPage = async(bookId, currentPage) => {
  let options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/1/books/${bookId}?current_page=${currentPage}`, options)
  try {
    return response.json()
  } catch {
    throw Error('There was an error updating the current page')
  }
}





