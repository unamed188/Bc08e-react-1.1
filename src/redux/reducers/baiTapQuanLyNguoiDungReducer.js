const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyễn Văn A",
      matKhau: "123456789",
      email: "nguyenvana@gmail.com",
      soDienThoai: "0909090909",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyễn Văn B",
      matKhau: "987654321",
      email: "nguyenvanb@gmail.com",
      soDienThoai: "0808080808",
      maLoaiNguoiDung: "KhachHang",
    },
  ],
};

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  console.log("action", action);
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      // state.mangNguoiDung.push(action.nguoiDung)
      return { ...state };
    }

    case "XOA_NGUOI_DUNG": {
      const mangNguoiDungCaoNhat = [...state.mangNguoiDung];
      state.mangNguoiDung = mangNguoiDungCaoNhat.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );

      return { ...state };
    }

    default:
      return state;
  }
};
