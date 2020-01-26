export const getBooks = async(userId) => {
  try {
    const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books`)
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const getBookText = async(userId, bookId) => {
  try {
    const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books/${bookId}`)
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const getToken = async() => {
  try {
    const response = await fetch('https://guten-server.herokuapp.com/api/v1/access_token/1')
    return response.json()
  } catch {
    throw Error('There was an error getting a token')
  }
}

export const getRecommendation = async(token, currentMood, currentText="very positive nice wonderful") => {
  let recommendation = {
    current_mood: currentMood,
    text: currentText,
    access_token: token
  }
  let options = {
    method: 'POST',
    body: JSON.stringify(recommendation),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await fetch('https://micro-guten.herokuapp.com/api/v1/recommendation', options)
    console.log(response.status)
    if (response.status === 200) {
      return response.json().then(function(data) {
        return data
      })
    } else {
      return {}
    }
  } catch {
    throw Error('There was an error getting a recommendation')
  }
}

export const postSongToPlayer = async(uri, token) => {
  let uriString = {
    uris: uri
  }
  let options = {
    method: 'PUT',
    body: JSON.stringify(uriString),
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await fetch('https://api.spotify.com/v1/me/player/play', options).catch(error => console.log(error))
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
  try {
    const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/1/books/${bookId}?current_page=${currentPage}`, options).catch(error => console.log(error))
    return response.json()
  } catch {
    throw Error('There was an error updating the current page')
  }
}

export const addBook = async(userId, book) => {
  let options = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books`, options);
    return response.json()
  } catch {
    throw Error('There was an error adding a new book')
  }
}

export const deleteBook = async(userId, bookId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    await fetch(`https://guten-server.herokuapp.com/api/v1/users/${userId}/books/${bookId}`, options);
  } catch {
    throw Error('There was an error deleting your book')
  }
}
