import { testStore } from '../../Utils/index'
import fetchMock from 'fetch-mock'
import moxios from 'moxios';
import { GET_POSTS, fetchPosts } from './index'
describe('fetch posts async', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  describe('dispatch GET_POSTS action type correctly', () => {
    const store = testStore();
    it('dispatch GET_POSTS_SUCCES correct', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {}
        })
      });
      const expectedActions = [
        { type: GET_POSTS.BEGIN },
        { type: GET_POSTS.SUCCESS, payload: {} }
      ]
      return store.dispatch(fetchPosts())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('dispatch GET_POSTS_FAIL correct', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: { error: {} }
        })
      });
      const expectedActions = [
        { type: GET_POSTS.BEGIN },
        { type: GET_POSTS.FAIL, error: {} }
      ]
      return store.dispatch(fetchPosts())
        .catch(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  });
});