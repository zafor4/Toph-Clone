import React, { Component } from 'react';
import { fetchProblem } from '../../../Redux/ActionCreaters';
import { connect } from 'react-redux';
import ProblemTypes from './ProbelmTypes/ProblemTypes';
import Lower from '../Home/Sections/Lower';

// const mapDispatchToProps = (dispatch) => {
//   return { fetchProblem: () => dispatch(fetchProblem()) };
// };

const mapStateToProps = (state) => {
  let problems = state.problems;
  let easyProblems = [];
  let mediumProblems = [];

  for (let i = 0; i < problems.length; i++) {
    let problem = problems[i];
    if (problem.category === 'easy') {
      easyProblems.push({
        problemId: problem.id,
        problem: problem.problem,
      });
    } else if (problem.category === 'medium') {
      mediumProblems.push({
        problemId: problem.id,
        problem: problem.problem,
      });
    }
  }

  return {
    ...state,
    token:state.token,
    easyProblems: easyProblems,
    mediumProblems: mediumProblems,
    topsolvers:state.topsolvers,
totalProblems: state.DATA.gloryData.totalProblems,
  };
};

export class Problems extends Component {
  // componentDidMount() {
  //   this.props.fetchProblem();
  // }

  render() {
    console.log(this.props.easyProblems);
    return <div className='container tw-mt-10 md:tw-grid tw-grid-cols-2 tw-gap-x-20'>
     <div className='tw-flex tw-flex-col'>
      <ProblemTypes token={this.props.token} title="Easy" problems={this.props.easyProblems}/>
      <ProblemTypes token={this.props.token} title="Medium" problems={this.props.mediumProblems}/>
    </div>
    <div className='md:tw-ps-32 md:tw-mt-8'>
      <div className='tw-text-right tw-border tw-rounded tw-mt-10 tw-p-2'>
        <p>0/{this.props.totalProblems}</p>
        <strong>Problems solved</strong>
      </div>
      <div>
      <Lower title="Top Solvers" data={this.props.topSolvers} key={Math.random()}/>
      </div>
    </div>
    </div>
  }
}

export default connect(mapStateToProps,)(Problems);
