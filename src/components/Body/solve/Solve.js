import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProblemDescription from './ProblemDescription';
import Submission from './Submission';

const mapStateToProps = (state) => {
  
  return {
    currentProblemId:state.currentProblemId,
    problems:state.problems,
    userId:state.userId
  };
};

export class Solve extends Component {
  problem=''

  render() { 

    for (let problem of this.props.problems){
      if(problem.id===this.props.currentProblemId){
        this.problem=problem
      }
    }
    console.log(this.problem,this.props.userId)

    return (
      <div className='container'>
<div className="tw-flex tw-flex-col tw-m-4 md:tw-m-0 md:tw-grid md:tw-grid-cols-3 md:tw-gap-4">
  <div className="md:tw-col-span-2 ">
    <ProblemDescription problem={this.problem}/>
  </div>
  <div className="">
    <Submission/>
  </div>

</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Solve);
