import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import authSliceReduccer, { authSlice } from './features/AuthSlice'
import { counterReduccer, counterSlice } from './features/CounterSlice'
import resourcesSliceReduccer, { resourcesSlice } from './features/ResourcesSlice'

const authReduccerPersisted = persistReducer({
    key: 'registros-auth',
    storage
}, authSliceReduccer)

export const store = configureStore({
    reducer: {
        [counterSlice.name]: counterReduccer,
        [authSlice.name]: authReduccerPersisted,
        [resourcesSlice.name]: resourcesSliceReduccer
    },
    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({ serializableCheck: false }).concat(thunk)
    }
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
