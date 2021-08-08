import React, { Component } from "react";
import { connect } from "react-redux";
class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDienThoai: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
  };

  handleChangeInput = (event) => {
    let { value, name } = event.target; // {valueEmail,email} = <input typeEmail="email" name="email" />
    let newValues = { ...this.props.nguoiDung.values }; // newValues = {taiKhoan:'',matKhau:'',.....}
    newValues[name] = value; // newValue['email'] = valueEmail
    let attrValue = ""; // attrValue = ''
    let regex; // regex = undefine
    if (event.target.getAttribute("typeEmail")) {
      // !undefine
      attrValue = event.target.getAttribute("typeEmail"); //attrValue = email
      regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //regex = /.....
    }
    let newErrors = { ...this.props.nguoiDung.errors }; //newErrors =  {taiKhoan:'',matKhau:'',.....}
    let messageError = ""; // messageError = ''
    if (value.trim() === "") {
      messageError = name + " không được bỏ trống !";
    }
    //Nếu là email
    if (regex) {
      if (attrValue === "email") {
        if (!regex.test(value)) {
          messageError = name + " phải đúng định dạng!"; //email + ' không đúng định dạng'
        }
      }
    }
    newErrors[name] = messageError; //newErrors[email] = email + ' không đúng định dạng'
    //Xử lý setState
    // this.setState({
    //   values: newValues, //values = this.state.values cũ nhưng giá trị email đã bị thay đổi
    //   errors: newErrors, //errors = this.state.errors cũ nhưng giá trị email đã bị thay đổi
    // });

    this.props.dispatch({
        type:'HANDLE_CHANGE_INPUT',
        nguoiDung:{
            values: newValues,
            errors: newErrors,
        }
    })
  };

  handleSubmit = (event) => {
    //Cản sự kiện submit browser
    event.preventDefault();
    console.log("state", this.state);
    //Bắt trường hợp lỗi khi sẽ không cho submit
    let valid = true;
    //Duyệt bắt error phải = rổng hết mới hợp lệ
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }
    //Duyệt bắt tất cả value phải khác rổng mới hợp lệ
    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }
    if (!valid) {
      //Không hợp lệ
      alert("Dữ liệu không hợp lệ !");
      return;
    }
    //submit lên redux tại đây khi tất cả hợp lệ
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };

    this.props.dispatch(action);
  };

  render() {
    let { taiKhoan, hoTen, email, matKhau, soDienThoai, maLoaiNguoiDung } =
      this.props.nguoiDung.values;

    return (
      <form className="card mt-5" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">Form đăng ký</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tài khoản</p>
                <input
                  value={taiKhoan}
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Mật khẩu</p>
                <input
                  value={matKhau}
                  className="form-control"
                  name="matKhau"
                  type="password"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.matKhau}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  typeEmail="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <p>Mã loại người dùng</p>
                <select
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={this.handleChangeInput}
                >
                  <option value="KhachHang">Khách hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-left">
          <button className="btn btn-outline-success mr-2" type="submit">
            Đăng ký
          </button>
          <button type="button" onClick={()=>{
              //Cập nhật dữ liệu
              const action ={
                  type:"CAP_NHAT_NGUOI_DUNG",
                  nguoiDungCapNhat: this.props.nguoiDung.values
              }
              this.props.dispatch(action)
            //   anh quên chưa dispatch thôi anh, lúc cập nhật thì mình ko dc thay đổi tài khoản nha anh
          }}
          className="btn btn-outline-primary">Cập nhật</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
    nguoiDung: state.baiTapQuanLyNguoiDungReducer.nguoiDung

  };
};

export default connect(mapStateToProps)(FormDangKy);
