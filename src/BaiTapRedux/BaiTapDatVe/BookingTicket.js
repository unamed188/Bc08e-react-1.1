import React, { Component } from "react";
import "./BookingTicket.css";
import TicketInfo from "./TicketInfo";
import seatsData from "../../assets/data/danhSachGhe.json";
import SeatMap from "./SeatMap";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return seatsData.map((hangGhe, index) => {
      return (
        <div key={{ index }} className="seatMap">
          <SeatMap hangGhe={hangGhe} soHangGhe={index}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bookingTicket">
        <div className="tint">
          <div>
            <div className="row">
              <div className="seatMap col-8 text-center">
                <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <h3>Màn hình</h3>
                <div className="screenPosition">
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>  
              </div>
              <div className="seatInfo col-4">
                <div className="text-light">Danh sách ghế bạn chọn</div>
                <TicketInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}