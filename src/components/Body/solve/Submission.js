import axios from 'axios';
import React from 'react';

const Submission = (props) => {
  const handleSubmission = async (submissionData) => {
    const url = 'https://emkc.org/api/v2/piston/execute';

    try {
      const response = await axios.post(url, submissionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    }
  };

  const submissionData = {
    language: 'python',
    version: '3.9.5',
    files: [
      {
        name: 'main.py',
        content: 'print("Hello, world!")',
      },
    ],
    stdin: '',
  };

  return (
    <div className='tw-border-2 tw-rounded tw-mt-10 tw-p-4'>
      <button onClick={() => handleSubmission(submissionData)}>Submit</button>
    </div>
  );
};

export default Submission;
