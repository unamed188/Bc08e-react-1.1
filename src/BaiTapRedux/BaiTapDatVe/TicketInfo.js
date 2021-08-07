import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/action/BTDatVeAction";

class TicketInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 ticketInfo">
          <button className="gheDuocChon"></button>
          <span className="text-light">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light">Ghế đang đặt</span>
          <br />
          <button className="ghe"></button>
          <span className="text-light">Ghế chưa đặt</span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <td></td>
              <td>Tổng tiền</td>
              <td className="text-warning">
                {this.props.danhSachGheDangDat.reduce(
                  (tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  },
                  0
                ).toLocaleString()}
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(TicketInfo);