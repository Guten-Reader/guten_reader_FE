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

export const getRecommendation = async() => {
  let recommendation = {
    text: "This is a very happy and positive statement.", 
    access_token: "BQCUhf-kwMIv9TrDe9boSzrRr-Z6xmuPLoqTAgEyJDJD6G4HIMlQHgRX6BWllCfIxOpK2kQQCiHDsqa3svALu0jPyuAnw6-dn1tjkpB1SSAGL6ma3Q1ZIegcIfKS1v4ag-Gb8uUKc9ch5tt20vazj_PXmK0", 
    user_id: 1
  }
  let options = {
    method: 'POST',
    body: JSON.stringify(recommendation),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`https://micro-guten.herokuapp.com/api/v1/recommendation`, options)
  try {
    // console.log('response for get recommendation-->', response)
    return repsonse.json()
  } catch {
    throw Error('There was an error getting a recommendation')
  }
}

// getRecommendation()



