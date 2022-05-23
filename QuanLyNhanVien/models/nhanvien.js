function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam){
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";

    this.tinhTongLuong = function(){
        if(this.chucVu == 3){
            this.tongLuong = parseFloat(this.luongCoBan) * 3
        } else if(this.chucVu == 2){
            this.tongLuong = parseFloat(this.luongCoBan) * 2
        } else {
            this.tongLuong = parseFloat(this.luongCoBan) * 1
        }
    }

    this.xepLoaiNhanVien = function(){
        if(this.gioLam >= 192){
            return this.loaiNhanVien = "Nhân viên xuất sắc";
        } else if(this.gioLam >= 176){
            return this.loaiNhanVien = "Nhân viên  giỏi";
        } else if(this.gioLam >= 160){
            return this.loaiNhanVien = "Nhân viên  khá";
        } else{
            return this.loaiNhanVien = "Nhân viên trung bình";
        }
    }
}