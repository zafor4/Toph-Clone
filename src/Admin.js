import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

export class Admin extends Component {
  render() {

    return (
      <div>
        <Formik
          initialValues={{
            title: "",
            category:"",
            description: "",
            input: "",
            output: "",
            testcaseInput: "",
            testcaseOutput: "",
          }}
          onSubmit={(values) => {
            const data = {
              userId: this.props.userId,
              category:values.category,
              problem: {
                title: values.title,
                description: values.description,
                input: values.input,
                output: values.output,
                testcaseInput: values.testcaseInput,
                testcaseOutput: values.testcaseOutput,
              },
            };
            axios
              .post(
                "https://toph-b2bcb-default-rtdb.firebaseio.com/problemSet.json",
                data
              )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Set Problems</h2>

              <div className="tw-flex tw-flex-col">
                <input
                  type="text"
                  name="title"
                  placeholder="question Title"
                  value={values.title}
                  onChange={handleChange}
                />

<input
                  type="text"
                  name="category"
                  placeholder="category"
                  value={values.category}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="description"
                  placeholder="Problem Description"
                  value={values.description}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="input"
                  placeholder="input"
                  onChange={handleChange}
                  value={values.input}
                />
                <input
                  type="text"
                  name="output"
                  placeholder="Output"
                  onChange={handleChange}
                  value={values.output}
                />
                <input
                  type="text"
                  name="testcaseInput"
                  placeholder="testcaseInput"
                  onChange={handleChange}
                  value={values.testcaseInput}
                />
                <input
                  type="text"
                  name="testcaseOutput"
                  placeholder="testcaseOutput"
                  onChange={handleChange}
                  value={values.testcaseOutput}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Admin);
