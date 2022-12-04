import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
    sampleState: string,
}

export const initialState = {
    sampleState: "sampleStateValue",
} as PostState;

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setSampleState(state, { payload }: PayloadAction<string>) {
            state.sampleState = payload;
        },
    },
})

export const { setSampleState, } = movieSlice.actions
export default movieSlice.reducer