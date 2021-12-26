import React, { Component } from "react";
import Computer from "./Computer";
import KetQua from "./KetQua";
import "./OanTuTi.css";
import Player from "./Player";

import { connect } from "react-redux";

class OanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="row text-center mt-5">
          <div className="col-4 mt-5">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <KetQua />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-4 mt-5">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputer = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count += 1;
        if (count >= 10) {
          clearInterval(randomComputer); //dừng

          dispatch ({
              type: "END_GAME",

          })
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuTi);
