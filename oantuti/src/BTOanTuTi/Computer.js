import React, { Component } from "react";
import {connect} from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
        0% {top: -50px;}
        25% {top: 100px;}
        50% {top: -50px;}
        75% {top: 100px;}
        100% {top: 0;}
      }`;
    return (
      <div className="text-center playerGame">
          <style>
              {keyframe}
          </style>
        <div className="theThink" style={{position: 'relative'}}>
          <img style={{position: 'absolute', left: '30%', animation: `all randomItem${Date.now()} 500ms`,transform: 'rotate(120deg) translateY(20px) translatex(-10px)',}} width={80} height={100}
            className="mt-3"
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="/img/playerComputer.png"
          alt="/img/playerComputer.png"
        />
      </div>
    );
  }
}
//
const mapStateToProps = (state) => {
    return {
        computer: state.OanTuTiReducer.computer,
    }
}

export default connect(mapStateToProps, null) (Computer)