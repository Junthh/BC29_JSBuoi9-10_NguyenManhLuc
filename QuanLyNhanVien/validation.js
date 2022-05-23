function Validation() {
    this.kiemTraTK = function (value, mess1, mess2) {
        if (value.length >= 4 && value.length <= 6) {
            getEle('tbTKNV').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbTKNV').innerHTML = mess1;
            getEle('tbTKNV').style.display = "block";
            return false;
        } else {
            getEle('tbTKNV').innerHTML = mess2;
            getEle('tbTKNV').style.display = "block";
            return false;
        }
    }

    this.kiemTraChuoiKiTu = function (value, mess1, mess2) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            getEle('tbTen').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbTen').innerHTML = mess1;
            getEle('tbTen').style.display = "block";
            return false;
        } else {
            getEle('tbTen').innerHTML = mess2;
            getEle('tbTen').style.display = "block";
            return false;
        }
    }

    this.kiemTraEmail = function (value, mess1, mess2) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(letter)) {
            getEle('tbEmail').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbEmail').innerHTML = mess1;
            getEle('tbEmail').style.display = "block";
            return false;
        } else {
            getEle('tbEmail').innerHTML = mess2;
            getEle('tbEmail').style.display = "block";
            return false;
        }
    }

    this.kiemTraPassword = function (value, mess1, mess2, mess3) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.length >= 6 && value.length <= 10) {
            if (value.match(letter)) {
                getEle('tbMatKhau').innerHTML = "";
                return true;
            } else {
                getEle('tbMatKhau').innerHTML = mess3;
                getEle('tbMatKhau').style.display = "block";
                return false;
            }
        } else if (value === "") {
            getEle('tbMatKhau').innerHTML = mess1;
            getEle('tbMatKhau').style.display = "block";
            return false;
        } else {
            getEle('tbMatKhau').innerHTML = mess2;
            getEle('tbMatKhau').style.display = "block";
            return false;
        }
    }

    this.kiemTraNgay = function (value, mess) {
        var letter = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;
        if (value.match(letter)) {
            return true;
        }
        getEle('tbNgay').innerHTML = mess;
        getEle('tbNgay').style.display = "block";
        return false;
    }

    this.kiemTraLuong = function (value, mess1, mess2) {
        if (value >= 1000000 && value <= 20000000) {
            getEle('tbLuongCB').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbLuongCB').innerHTML = mess1;
            getEle('tbLuongCB').style.display = "block";
        } else {
            getEle('tbLuongCB').innerHTML = mess2;
            getEle('tbLuongCB').style.display = "block";
            return false;
        }
    }

    this.kiemTraChucVu = function (value, mess) {
        if (value >= 1 && value <= 3) {
            getEle('tbChucVu').innerHTML = "";
            return true;
        }
        getEle('tbChucVu').innerHTML = mess;
        getEle('tbChucVu').style.display = "block";
        return false;
    }

    this.kiemTraGio = function (value, mess1, mess2) {
        if (value >= 80 && value <= 200) {
            getEle('tbGiolam').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbGiolam').innerHTML = mess1;
            getEle('tbGiolam').style.display = "block";
        } else {
            getEle('tbGiolam').innerHTML = mess2;
            getEle('tbGiolam').style.display = "block";
            return false;
        }
    }
}