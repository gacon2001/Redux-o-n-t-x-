import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg) translateX(-10px)" }}
            width={80}
            height={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="/img/player.png"
          alt="/img/player.png"
        />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div className="col-4">
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.OanTuTiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      const action = {
        type: "KEO_BUA_BAO",
        maCuoc,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
