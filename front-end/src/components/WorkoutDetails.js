import React from 'react';
import { useWorkoutContext } from "../hooks/useWorkoutscontext";

const WorkoutDetails = ({ workout }) => {

  const { dispatch } = useWorkoutContext()

  const handleDelete = async () => {
    const response = await fetch("http://localhost:5000/api/workouts" + workout._id, {
      method: "DELETE"
    })

    const json = await response.json()

    if(response.ok) {
      dispatch({type: "DELETE_WORKOUT", payload: json})
    }

  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg):</strong> {workout.reps}</p>
      <p><strong>Reps:</strong> {workout.load}</p>

      <span onClick={handleDelete}><i className='bx bx-trash'></i></span>
    </div>
  )
}   

export default WorkoutDetails
