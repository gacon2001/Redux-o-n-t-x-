import React, { Component } from "react";
import {connect}  from "react-redux";


class KetQua extends Component {
  render() {
    return (
      <div>
        <div className="text-warning text">{this.props.ketQua}</div>
        <div className="text-warning text">Số bàn thắng: <span className="text-warming text">{this.props.soBanThang}</span></div>
        <div className="text-warning text">Số bàn thua: <span className="text-warming text">{this.props.soBanChoi}</span></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        ketQua: state.OanTuTiReducer.ketQua ,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soBanChoi: state.OanTuTiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps, null) (KetQua);
