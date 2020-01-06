import { getBooks, getBookText } from './apiCalls'

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
  })
