var dsnv = new DanhSachNhanVien();
var validation = new Validation();
getLocoalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNV() {
    var _taiKhoan = getEle('tknv').value;
    var _hoTen = getEle('name').value;
    var _email = getEle('email').value;
    var _matKhau = getEle('password').value;
    var _ngayLam = getEle('datepicker').value;
    var _luongCoBan = getEle('luongCB').value;
    var _chucVu = getEle('chucvu').value;
    var _gioLam = getEle('gioLam').value;

    var isValid = true;

    isValid &= validation.kiemTraTK(_taiKhoan, '(*) Vui lòng nhập tài khoản', "(*) Tài khoản chỉ từ 4-6 ký số");

    isValid &= validation.kiemTraChuoiKiTu(_hoTen, '(*) Không được để trống', '(*) Tên nhân viên phải là chữ');

    isValid &= validation.kiemTraEmail(_email, '(*) Không được để trống', '(*) Email không hợp lệ');

    isValid &= validation.kiemTraPassword(_matKhau, '(*) Không được để trống', '(*) Mật Khẩu từ 6-10 ký tự', 'Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');

    isValid &= validation.kiemTraNgay(_ngayLam, '(*) định dạng mm/dd/yyyy');

    isValid &= validation.kiemTraLuong(_luongCoBan, '(*) Không được để trống', '(*) Lương cơ bản 1.000.000 - 20.000.000');

    isValid &= validation.kiemTraChucVu(_chucVu, '(*) Vui lòng chọn chức vụ');

    isValid &= validation.kiemTraGio(_gioLam, '(*) Không được để trống', '(*) Số giờ làm trong tháng 80 - 200 giờ');



    if (!isValid) return;

    var nhanVien = new NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam);

    nhanVien.tinhTongLuong();

    nhanVien.xepLoaiNhanVien();

    return nhanVien;
}

getEle('btnThemNV').onclick = function () {
    var nhanVien = layThongTinNV();

    if (nhanVien) {
        dsnv.themNV(nhanVien);
        show(dsnv.arr);
        setLocalStorage();
    }
}

function show(data) {
    var content = "";
    data.forEach(function (item) {
        content += `
            <tr>
                <td>${item.taiKhoan}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.ngayLam}</td>
                <td>${item.chucVu}</td>
                <td>${item.tongLuong}</td>
                <td>${item.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoan}')">Xóa</button>
                </td>
            </tr>
        `;
    });
    getEle('tableDanhSach').innerHTML = content;
}

function setLocalStorage() {
    // Convert from JSON to String
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem('DSNV', dataString);
}

function getLocoalStorage() {
    if (localStorage.getItem('DSNV')) {
        var dataString = localStorage.getItem('DSNV');
        // Convert from String to JSON
        var dataJson = JSON.parse(dataString);
        dsnv.arr = dataJson;
        show(dsnv.arr);
    }
}

function xoaNV(id) {
    dsnv.xoaNV(id);
    show(dsnv.arr);
    setLocalStorage();
}


getEle('btnCapNhat').onclick = function(){
    var nhanVien = layThongTinNV();
    dsnv.capNhatNV(nhanVien);
    show(dsnv.arr);
    setLocalStorage();
}

getEle('searchName').addEventListener('keyup', function(){
    var keyword = getEle('searchName').value;
    var mangTimKiem = dsnv.timKiemNV(keyword);
    show(mangTimKiem);
})