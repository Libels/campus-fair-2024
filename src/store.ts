import { configureStore } from '@reduxjs/toolkit'
import {
	persistStore, persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import reduxReducer from "@/redux-reducer"

const persistConfig = {
	key: 'primary',
	storage: storageSession,
	version: 3
}

const persistedReducer = persistReducer(persistConfig, reduxReducer)

export function makeStore() {
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
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