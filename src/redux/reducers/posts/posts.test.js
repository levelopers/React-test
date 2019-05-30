import { GET_POSTS } from '../../actions';
import postsReducer,{initalState} from './reducer';


describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual(initalState);
  });

  it('Should return new state if receiving type', () => {
    const posts = [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }];
    const newState = postsReducer(undefined, {
      type: GET_POSTS.SUCCESS,
      payload: posts
    });
    expect(newState).toEqual({...initalState,posts:posts});
  });
});