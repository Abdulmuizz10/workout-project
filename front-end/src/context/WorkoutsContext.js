import {createContext, useReducer} from "react";

// Initializing workoutcontext function
export const WorkoutsContext = createContext();

// The reducer function for state changes
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            }
        case "CREATE_WORKOUT": 
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case "DELETE_WORKOUT" : 
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default :
            return state
    }
}

// context provider function
export const WorkoutsContextProvider = ({ children }) => {
    // initial state 
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    // returnary state value provider
    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}