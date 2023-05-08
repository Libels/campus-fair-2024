import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reduxReducer from "@/redux-reducer"
import { useMemo } from 'react'

const persistConfig = {
	key: 'primary',
	storage
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