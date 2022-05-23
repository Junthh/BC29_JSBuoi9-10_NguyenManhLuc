function DanhSachNhanVien() {
    this.arr = [];

    this.themNV = function (nv) {
        this.arr.push(nv);
    };

    this.timViTriNV = function (taiKhoan) {

        var index = -1
        this.arr.forEach(function (item, i) {
            if (item.taiKhoan === taiKhoan) {
                index = i;
            }
        });

        return index;
    }

    this.xoaNV = function (taiKhoan) {
        var index = this.timViTriNV(taiKhoan);

        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };


    this.capNhatNV = function (nv) {
        var index = this.timViTriNV(nv.taiKhoan);
        if (index !== -1) {
            this.arr[index] = nv;
        }
    };

    this.timKiemNV = function (keyword, loaiNhanVien) {
        var mangTimKiem = [];

        this.arr.forEach(function(item){
            if(item.loaiNhanVien.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ){
                mangTimKiem.push(item);
            }
        })

        return mangTimKiem;
     };
}