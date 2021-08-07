import React, { Component } from 'react'
//Thư viện kết nối redux
import { connect } from 'react-redux';

class GioHang extends Component {


    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} height={50} width={50} alt="..." /></td>
                <td>{spGH.giaBan}</td>

                <td>
                    <button className="btn btn-outline-primary mr-2" onClick={() => {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick: spGH.maSP,
                            soLuong: 1
                        }
                        //Gọi hàm dispatch gửi dữ liệu lên redux
                        this.props.dispatch(action)

                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-outline-primary mr-2" onClick={() => {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick: spGH.maSP,
                            soLuong: -1
                        }
                        //Gọi hàm dispatch gửi dữ liệu lên redux
                        this.props.dispatch(action)
                    }}>-</button>
                </td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button className="btn btn-outline-danger" onClick={() => {
                    //Cách 1:
                    //Tạo ra action chứa dữ liệu gửi lên redux
                    // const action = {
                    //     type:'XOA_GIO_HANG',
                    //     maSPClick: spGH.maSP
                    // }
                    //Dùng hàm this.props.dispatch từ redux cung cấp để gửi dữ liệu lên redux (reducer)
                    // this.props.dispatch(action);
                    this.props.xoaGioHang(spGH.maSP)
                }} >Xoá</button></td>
            </tr>
        })
    }
    render() {
        console.log(this.props, 'propsGioHang')


        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sp</th>
                                            <th>Tên sp</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá bán</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//Hàm này sẽ giúp gửi dữ liệu lên redux (giống hệt this.props.dispatch)
//Cách 2
// const mapDispatchToProps = (dispatch) => {
//     //Trả về props là hàm 
//     return {
//         xoaGioHang: (maSPClick) => {
//             const action = {
//                 type: 'XOA_GIO_HANG',
//                 maSPClick: maSPClick
//             }
//             dispatch(action);
//         },
//         // tangGiamSoLuong: () => {

//         // }
//     }
// }
//Hàm này giúp lấy giá trị state từ redux về biến đổi thành props của component
const mapStateToProps = (rootReducer) => {
    //Trả về props là giá trị
    return {
        gioHang: rootReducer.gioHangReducer
    }
}
const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);
export default ComponentGioHangRedux;

