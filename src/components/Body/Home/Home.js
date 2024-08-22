import React, { Component } from "react";
import Hero from "./Sections/Hero";
import HomeBody from "./Sections/HomeBody";
import Middle from "./Sections/Middle";
import { connect } from "react-redux";
import Lower from "./Sections/Lower";



const mapStateToProps=state=>{
  return{
    ...state,
    data:state.DATA,
    topContestents:state.topContestents,
    topSolvers:state.topSolvers,
    topAuthors:state. topAuthors,
  }
  
}

export class Home extends Component {


  render() {
    return (
      <div>
        <Hero />
        <Middle data={this.props.data}/>
        <div className="tw-mx-6 container tw-flex tw-flex-col md:tw-flex-row tw-justify-around">
        <Lower title="Top Contestents" data={this.props.topContestents} key={Math.random()}/>
        <Lower title="Top Solvers" data={this.props.topSolvers} key={Math.random()}/>
        <Lower title="Top Authors" data={this.props.topAuthors} key={Math.random()}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
