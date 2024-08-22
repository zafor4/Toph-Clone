import React, { Component } from 'react'
import Left from './Sections/Left'
import Right from './Sections/Right'
import { connect } from 'react-redux'



const mapStateToProps=state=>{
let countEasy=0
let countMedium=0
  for (let problem of state.problems){
    if (problem.category==='easy'){
      countEasy++;
    }
    else if (problem.category==="medium"){
      countMedium++;
    }
  }
  return{
    contests:state.DATA,
   totalProblems:state.DATA.gloryData.totalProblems,
   problems:state.problems,
   totalSolvedEasy:1,
   totalSolvedMedium:1,
   totalSolvedHard:20,
   count:{
    countEasy:countEasy,
    countMedium:countMedium
   }
  }
}

export class HomeAuthenticated extends Component {
  
  render() {
    return (
      
      <div className='container tw-flex tw-flex-col md:tw-flex-row'>
        <Left totalProblems={this.props.totalProblems} totalProblemsEasy={this.props.count.countEasy} totalSolvedEasy={this.props.totalSolvedEasy} totalProblemsMedium={this.props.count.countMedium}  totalSolvedHard={this.props.totalSolvedHard} totalSolvedMedium={this.props.totalSolvedMedium}/>
        <Right data={this.props.contests.contestData}/>
      </div>

    )
  }
}

export default connect(mapStateToProps)(HomeAuthenticated);