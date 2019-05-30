import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
	dispatch({
		type: GET_POSTS.BEGIN
	})
	return await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then(res => {
			dispatch({
				type: GET_POSTS.SUCCESS,
				payload: res.data
			})
		})
		.catch(error => {
			dispatch({
				type: GET_POSTS.FAIL,
				error
			})
		})
};

export const GET_POSTS = {
	BEGIN: 'GET_POSTS_BEGIN',
	SUCCESS: 'GET_POSTS_SUCCESS',
	FAIL: 'GET_POSTS_FAIL'
}