import React from 'react';

const ProblemDescription = (props) => {
    // Check if props.problem is defined before accessing its properties
    if (!props.problem) {
        return <div>Loading...</div>; // Display a loading state or a message
    }

    const { problem } = props.problem;

    return (
        <div className='tw-p-4 tw-border-2 tw-rounded tw-my-10'>
            <div>
                <h4>{problem.title}</h4>
                <p>statement</p>
                <hr />
                <p>{problem.description}</p>
                <h5>Input</h5>
                <p>{problem.input}</p>
                <h5>Output</h5>
                <p>{problem.output}</p>
                <h5>Sample</h5>
                <div className='tw-flex tw-justify-between md:tw-justify-start tw-text-center'>
                    <div className='md:tw-mr-40'>
                        <h6>Input</h6>
                        <p>{problem.testcaseInput}</p>
                    </div>
                    <div>
                        <h6>Output</h6>
                        <p>{problem.testcaseOutput}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemDescription;
