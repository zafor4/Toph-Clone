import * as actionTypes from './ActionTypes'
import axios from 'axios';


export const loadProblems=orders=>{
    return{
        type:actionTypes.LOAD_PROBLEMS,
        payload:orders
    }
}

export const ProblemsLoadFailed=()=>{
    return{
        type:actionTypes.LOAD_PROBLEMS_FAILED
    }
}

export const fetchProblem=()=>dispatch=>{
    axios.get("https://toph-b2bcb-default-rtdb.firebaseio.com/problemSet.json")
    .then(response=>{
        dispatch(loadProblems(response.data))
    })
    .catch(err=>console.log(err))
}

export const openProblem=(problemId)=>{
    return{
        type:actionTypes.CURRENT_PROBLEM,
        payload:problemId
    }
}