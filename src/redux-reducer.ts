import { createSlice } from "@reduxjs/toolkit"

export interface ReduxTypes {
	userSession: {
		id: number,
		username: string,
		fullName: string,
		avatar: string,
		isVerified: boolean,
		newsletter: boolean,
	},
	pageLoading: boolean
}

const reduxReducer = createSlice({
	name: 'app',
	initialState: {
		userSession: {
			id: 0,
			username: '',
			fullName: '',
			avatar: '',
			isVerified: false,
			newsletter: false,
		},
		pageLoading: false
	},
	reducers: {
		toggleLoading(state, action) {
			state.pageLoading = action.payload
		},
		newsletterSubscribed(state) {
			state.userSession.newsletter = true
		},
		login(state, action) {
			state.userSession.id = action.payload.id
			state.userSession.username = action.payload.username
			state.userSession.fullName = action.payload.fullName
			state.userSession.avatar = action.payload.avatar
			state.userSession.isVerified = action.payload.isVerified
		},
	}
})

export const {
	toggleLoading,
	newsletterSubscribed,
	login,
} = reduxReducer.actions

export default reduxReducer.reducer