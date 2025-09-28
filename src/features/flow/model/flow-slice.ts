import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFlowAnswers } from './types/t-flow';
interface FlowState {
    answers: TFlowAnswers;
}

const initialState: FlowState = {
    answers: {},
};

export const flowSlice = createSlice({
    name: 'flowSlice',
    initialState,
    reducers: {
        setAnswer: (
            state,
            action: PayloadAction<{ stepId: string; value: string | Date | File }>
        ) => {
            state.answers[action.payload.stepId] = action.payload.value;
        },
        resetFlow: (state) => {
            state.answers = {};
        },
        setAnswers: (state, action: PayloadAction<TFlowAnswers>) => {
            state.answers = action.payload;
        },
    },
});

export const { setAnswer, resetFlow, setAnswers } = flowSlice.actions;
