import React, { Component } from "react";
import { connect } from "react-redux";

class TableDanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="card mt-5">
        <div className="card-header bg-dark text-white">
          Danh sách người dùng
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Mật khẩu</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Mã loại người dùng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangNguoiDung.map((nguoiDung, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.matKhau}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.maLoaiNguoiDung}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger mr-2"
                      onClick={() => {
                        const action = {
                          type: "XOA_NGUOI_DUNG",
                          taiKhoan: nguoiDung.taiKhoan,
                        };

                        this.props.dispatch(action);
                      }}
                    >
                      Xoá
                    </button>
                    <button onClick={()=>{
                        const action ={
                            type:'CHINH_SUA',
                            nguoiDungChinhSua:nguoiDung
                        }

                        this.props.dispatch(action)
                    }}
                    className="btn btn-outline-primary">
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
/*
    { return      <=>  ()
*/
const mapStateToProps = (state) => ({
  mangNguoiDung: state.baiTapQuanLyNguoiDungReducer.mangNguoiDung,
});
export default connect(mapStateToProps)(TableDanhSachNguoiDung);
