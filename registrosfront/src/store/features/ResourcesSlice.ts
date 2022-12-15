import { createSlice } from '@reduxjs/toolkit'

export const resourcesSlice = createSlice({
    name: 'resources',
    initialState: {
        resourceList: [] as any,
        loaded: false,
        activeResource: ''
    },
    reducers: {
        setResources (state, { payload }) {
            state.resourceList = payload
            state.loaded = true
        },
        setActiveResource (state, { payload }) {
            state.activeResource = payload
        }
    }
})

export type AuthState = ReturnType<typeof resourcesSlice.getInitialState>

export const { actions: { setResources, setActiveResource }, reducer: resourcesSliceReduccer } = resourcesSlice

export default resourcesSliceReduccer
