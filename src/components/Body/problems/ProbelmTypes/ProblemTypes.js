import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { openProblem } from '../../../../Redux/ActionCreaters';

const mapDispatchToProps = dispatch => ({
    openProblem: problemId => dispatch(openProblem(problemId))
});

const ProblemTypes = (props) => {
    const navigate = useNavigate();

    const handleSolve = (token, problemId) => {
        if (token) {
            props.openProblem(problemId);
            navigate("/solve" );
        } else {
            navigate("/authentication");
        }
    };

    let problems = props.problems;
    let elements = problems.map(item => (
        <div className='tw-border tw-rounded tw-px-2 tw-py-2 tw-my-6' key={item.problemId}>
            <p>{item.problem.title}</p>
            <p>{item.problem.description}</p>
            <button onClick={() => handleSolve(props.token, item.problemId)} className='btn btn-primary tw-relative tw-start-64 md:tw-start-96'>Solve</button>
        </div>
    ));

    return (
        <div>
            <div className='tw-my-5'>
                <h3 className="tw-ms-2 tw-mt-5">{props.title}</h3>
                {elements}
            </div>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(ProblemTypes);
