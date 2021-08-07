import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../redux/action/BTDatVeAction";

class SeatMap extends Component {
  renderSeats = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      //Trang thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      //xét trang thái đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        gheDangDat => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button onClick={()=>{
            this.props.datGhe(ghe)
        }} disabled={disable} key={index} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}>
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <span className="rowNumber">{hang.soGhe}</span>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderSeats()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-3" style={{ fontSize: 30 }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat };
};


const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatMap);