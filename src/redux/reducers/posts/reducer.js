import {
	GET_POSTS
} from '../../actions'

export const initalState = {
	loading: false,
	posts: [],
	error: null
}

export default (state = initalState, action) => {
	switch (action.type) {
		case GET_POSTS.BEGIN:
			return {
				...state,
				loading: true
			}
		case GET_POSTS.SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload,
				error: null,
			}
		case GET_POSTS.FAIL:
			return {
				...state,
				loading: false,
				error: action.error
			}
		default:
			return state;
	}
};