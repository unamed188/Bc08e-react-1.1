import React, { Component } from 'react';
//Kết nối dữ liệu đến redux
import {connect} from 'react-redux';
 class SanPham extends Component {
    render() {
        console.log('props',this.props)

        let {sanPham} = this.props;
        return (
            <div className="card">
                <img className="w-100" height={300} src={sanPham.hinhAnh} alt="..." />
                <div className="card-body">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan}</p>
                    <button className="btn btn-outline-success" onClick={()=>{
                        const action = {
                            type:'THEM_GIO_HANG', //Thuộc tính bắt buộc để xác định xử lý
                            sanPhamClick:sanPham
                        }
                        //Đưa dữ liệu lên redux 
                        this.props.dispatch(action);

                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
//Kết nối redux
export default connect()(SanPham);
