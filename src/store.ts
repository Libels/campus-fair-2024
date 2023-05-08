import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import reduxReducer from "@/redux-reducer"

const persistConfig = {
	key: 'primary',
	storage: storageSession
}

const persistedReducer = persistReducer(persistConfig, reduxReducer)

export function makeStore() {
	return configureStore({
		reducer: persistedReducer
	})
}

const store = makeStore()
const persistor = persistStore(store)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

export {
	persistor
}