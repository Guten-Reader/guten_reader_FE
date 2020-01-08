import { getBooks, getBookText, getToken } from './apiCalls'

describe('getBooks', () => {
  beforeEach(() => {
    window.fetch = jest.fn()
    });

    it('should be called with the correct url', () => {
      const userId = 1
      const expected = `https://guten-server.herokuapp.com/api/v1/users/${userId}/books`

      getBooks(userId)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return an array of books', async() => {
      const mockResult = [
        {
          id: 1,
          title: 'Im a title',
          author: 'Im the author',
          media_type: 'Text'
        },
        {
          id: 2,
          title: 'Im also a title',
          author: 'Im also an author',
          media_type: 'Text'
        }
      ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResult)
      });
    });
    const result = await getBooks(1)
    expect(result).toEqual(mockResult)
    });

    it('should return an error if the fetch is unsuccessful', async() => {
      const error = 'Fetch failed'
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(error);
      })
      expect(getBooks(1)).rejects.toEqual(error)
    });
  });

  describe('getBookText', () => {
    beforeEach(() => {
      window.fetch = jest.fn()
      });
  
      it('should be called with the correct url', () => {
        const userId = 1
        const bookId = 1
        const expected = `https://guten-server.herokuapp.com/api/v1/users/${userId}/books/${bookId}`
  
        getBookText(userId, bookId)
        expect(window.fetch).toHaveBeenCalledWith(expected)
      });

      it('should return a string of text', async() => {
        const mockResult = 'Im a texttt!'
        window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResult)
        });
      });
      const result = await getBookText()
      expect(result).toEqual(mockResult)
      });
    });

    describe('getToken', () => {
      beforeEach(() => {
        window.fetch = jest.fn()
      });

      it('should be called with the correct url', () => {
        const expected = 'https://guten-server.herokuapp.com/api/v1/access_token/1'
        getToken()
        expect(window.fetch).toHaveBeenCalledWith(expected)
      })
    })