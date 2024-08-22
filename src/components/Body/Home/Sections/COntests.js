import React from 'react'

const COntests = (props) => {
  return (
    <div>
       <div className="tw-bg-white tw-border tw-mt-10 md:tw-relative md:tw-top-16  tw-pt-8 tw-text-left tw-ml-12 tw-ps-4 tw-h-96 tw-w-60 tw-rounded-md tw-text-sm">
        <h5 className="tw-mb-10">Upcomming Contests</h5>
        <div className="tw-mt-7">
          <p>{props.data.contest1}</p>
          <p>{new Date().toString()}</p>
        </div>
        <div className="tw-mt-7">
          <p>{props.data.contest2}</p>
          <p>{new Date().toString()}</p>
        </div>
      </div>
    </div>
  )
}

export default COntests