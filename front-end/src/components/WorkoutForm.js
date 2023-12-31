import React, {useState} from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutscontext';

const WorkoutForm = () => {

  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, SetError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = {title, load, reps}
    const response = await fetch("http://localhost:5000/api/workouts", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(workout)
    })

    const json = response.json();

    if(!response.ok) {
        SetError(json.error);
    }

    if(response.ok) {
        setTitle("");
        setLoad("");
        setReps("");
        SetError(null);
        dispatch({type: "CREATE_WORKOUT", payload: json})
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label>Exercise Title:</label>
        <input type="text" 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />

        <label>Load (in kg):</label>
        <input type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        />

        <label>Reps:</label>
        <input type="text" 
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        />

        <button>Add workout</button>
        {error && <div className='error'>{error} </div>}
    </form>
  )
}

export default WorkoutForm
