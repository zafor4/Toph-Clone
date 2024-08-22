import React, { Component } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { authCheck} from './Redux/AuthActionCreaters';
import { fetchProblem } from './Redux/ActionCreaters';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck()),
    fetchProblem: () => dispatch(fetchProblem())
  };
};

 class Main extends Component {
  componentDidMount() {
    this.props.authCheck();
    this.props.fetchProblem();
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <Body />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
