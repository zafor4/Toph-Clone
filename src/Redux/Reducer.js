import * as actionTypes from "./ActionTypes";

const INITIAL_STATE = {
  currentProblemId:'',
  token: null,
  userId: null,
  problems:[],
  DATA: {
    gloryData: {
      totalProblems: "",
      AcceptedSolutions: "359k+",
      totalSubmissions: "1463",
      problemTutorial: "450+",
      programmingLanguages: 49,
    },
    contestData: {
      contest1: "[Mock] DIU Code Trap Programming contest Spring 2024",
      contest2: "Ardent Practice Weekly - july 19 2024",
    },
  },
  topContestents: [
    { userId: "mmkm0", amount: 2345 },
    { userId: "uibib0", amount: 7878 },
    { userId: "ncnrr0", amount: 3434 },
    { userId: "xkox0", amount: 8347 },
    { userId: "kmckm0", amount: 3456 },
    { userId: "mkm00", amount: 2345 },
    { userId: "ibib00", amount: 7878 },
    { userId: "cnrr00", amount: 3434 },
    { userId: "kox00", amount: 8347 },
    { userId: "mckm00", amount: 3456 },
  ],
  topSolvers: [
    { userId: "mmk9", amount: 2345 },
    { userId: "uibi9", amount: 7878 },
    { userId: "ncnr9", amount: 3434 },
    { userId: "xko9", amount: 8347 },
    { userId: "kmck9", amount: 3456 },
    { userId: "mmk99", amount: 2345 },
    { userId: "uibi99", amount: 7878 },
    { userId: "ncnr99", amount: 3434 },
    { userId: "xko99", amount: 8347 },
    { userId: "kmck99", amount: 3456 },
  ],
  topAuthors: [
    { userId: "mm3km8", amount: 2345 },
    { userId: "ui3bib8", amount: 7878 },
    { userId: "nc3nrr8", amount: 3434 },
    { userId: "xk3ox8", amount: 8347 },
    { userId: "km3ckm8", amount: 3456 },
    { userId: "m3km88", amount: 2345 },
    { userId: "ui33bib88", amount: 7878 },
    { userId: "ncn33rr88", amount: 3434 },
    { userId: "xko33x88", amount: 8347 },
    { userId: "kmc33km88", amount: 3456 },
  ],
  problems:'',
};
export const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
      case actionTypes.LOAD_PROBLEMS:
        let problems=[]
        for (let key in action.payload){
          problems.push({...action.payload[key],
            id:key
          })
        }

        return{
          ...state,
          problems:problems,
          DATA: {
            ...state.DATA,
            gloryData: {
              ...state.DATA.gloryData,
              totalProblems: problems.length.toString(),
            },
          },
        }
        case actionTypes.CURRENT_PROBLEM:
          return{
            ...state,
            currentProblemId:action.payload
          }

    default:
      return state;
  }
};
