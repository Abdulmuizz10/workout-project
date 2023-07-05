import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

// state hook function
export const useWorkoutContext = () => {

    // workout context hook initialization 
    const context = useContext(WorkoutsContext);

    if(!context) {
        throw Error("useWorkoutContext must be used inside WorkoutsContextProvider")
    }
    
    // returnary global state hook variable
    return context
}