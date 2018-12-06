/**
 * constructor DonHang
 * @param {string} khach_hang Tên khách hàng
 * @param {string} thoi_diem  Thời điểm đặt hàng
 * @param {string} tong_tien  Tổng tiền
 * @param {string} tinh_trang Tình trạng giao hàng
 */
function DonHang(khach_hang, thoi_diem, tong_tien, tinh_trang) {
    this.khach_hang = khach_hang;
    this.thoi_diem = thoi_diem;
    this.tong_tien = tong_tien;
    this.tinh_trang = tinh_trang;
}
var donhang = new Array();
donhang[0] = new DonHang("Trần Văn Nhân", "20/03/2017", 15000000, "Đã giao");
donhang[1] = new DonHang("Trần Văn Dũng", "26/12/2018", 2500000, "Chưa giao");
donhang[2] = new DonHang("Lê Văn Nhân", "20/09/2018", 300000, "Đã giao");
donhang[3] = new DonHang("Nguyễn Văn Trọng", "29/11/2018", 2000000, "Chưa giao");
donhang[4] = new DonHang("Trần Thị Nguyên", "20/03/2017", 18000000, "Đã giao");
donhang[5] = new DonHang("Trần Công Văn", "20/03/2016", 35000000, "Chưa liên lạc");
donhang[6] = new DonHang("Lý Nhân Từ", "10/02/2015", 35000000, "Đã giao");
donhang[7] = new DonHang("Hậu Sĩ ", "20/03/2017", 55000000, "Chưa liên lạc");
donhang[8] = new DonHang("Bùi Nhân Văn", "13/03/2017", 10000000, "Đã giao");
donhang[9] = new DonHang("Lý thị Út", "25/03/2015", 11000000, "Chưa giao");
donhang[10] = new DonHang("Nguyễn Bảo", "03/08/2017", 15000000, "Chưa liên lạc");
/**
 * constructor DanhMuc
 * @param {string} ten      Tên danh mục
 * @param {string} thu_tu   Thứ tự danh mục
 * @param {string} hien_thi Trạng thái hiển thị
 */
function DanhMuc(ten, thu_tu, hien_thi) {
    this.ten = ten;
    this.thu_tu = thu_tu;
    this.hien_thi = hien_thi;
}
var danhmuc = new Array();
danhmuc[0] = new DanhMuc("Điện Thoại", "1", "on");
danhmuc[1] = new DanhMuc("Laptop", "2", "on");
danhmuc[2] = new DanhMuc("Máy Ảnh", "3", "on");
danhmuc[3] = new DanhMuc("Máy Tính Bảng", "4", "on");
danhmuc[4] = new DanhMuc("Phụ Kiện", "5", "on");
danhmuc[5] = new DanhMuc("Điện Lạnh", "6", "off");
/**
 * Constructor User
 * @param {string} name      tên khách hàng
 * @param {string} dia_chi   địa chỉ khác hàng
 * @param {string} sdt       Số điện thoại
 * @param {string} email     Email
 * @param {string} gioi_tinh Giới tính
 * @param {string} ngsinh    Ngày sinh
 */
function User(name, dia_chi, sdt, email, gioi_tinh, ngsinh) {
    this.name = name;
    this.dia_chi = dia_chi;
    this.sdt = sdt;
    this.email = email;
    this.gioi_tinh = gioi_tinh;
    this.ngsinh = ngsinh;
}
user = new Array();
user[0] = new User("Nguyễn Quốc Hương", "TP. Hồ Chí Minh", "3117200012", "asdriv0@gmail.com", "Nam", "30/01/1999");
user[1] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv1@gmail.com", "Nữ", "26/06/1999");
user[2] = new User("Nguyễn Hữu Đan", "Bình Dương", "3117320060", "asdriv2@gmail.com", "Nam", "25/03/1999");
user[3] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv3@gmail.com", "Nam", "26/10/1998");
user[4] = new User("Lê Minh Sang", "TP. Hồ Chí Minh", "3117100022", "asdriv4@gmail.com", "Nam", "07/09/1999");
user[5] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv5@gmail.com", "Nữ", "26/06/1999");
user[6] = new User("Nguyễn Thị Hoa", "Trà Vinh", "3117341024", "asdriv6@gmail.com", "Nữ", "21/03/1999");
user[7] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv7@gmail.com", "Nam", "26/10/1998");
user[8] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv8@gmail.com", "Nam", "26/10/1998");
user[9] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv9@gmail.com", "Nam", "26/10/1998");
user[10] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv10@gmail.com", "Nam", "26/10/1998");
user[11] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv11@gmail.com", "Nam", "26/10/1998");
user[12] = new User("Phạm Thị Thuỳ Linh", "Thái Bình", "3117190063", "asdriv12@gmail.com", "Nữ", "08/05/1999");
user[13] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv13@gmail.com", "Nam", "26/10/1998");
user[14] = new User("Phạm Thị Thuỳ Linh", "Thái Bình", "3117190063", "asdriv14@gmail.com", "Nữ", "08/05/1999");
user[15] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv15@gmail.com", "Nữ", "26/06/1999");

/**
 * Constructor san_pham
 * @param  {string} masp     Mã sản phẩm
 * @param  {number} matl     Mã thể loại
 * @param  {string} tensp    Tên sản phẩm
 * @param  {number} gia      Giá
 * @param  {string} hinh     Link lưu trữ hình ảnh
 * @param  {string} loai     Loại danh mục
 * @param  {string} hien_thi Trạng thái hiển thị
 */
function san_pham(masp, matl, tensp, gia, hinh, loai, hien_thi) {
    this.masp = masp;
    this.matl = matl;
    this.tensp = tensp;
    this.gia = gia;
    this.hinh = hinh;
    this.loai = loai;
    this.hien_thi = hien_thi;
}
var phone = new Array();
phone[0] = new san_pham("phone0", 0, "OPPO A7", 20000000, "image/phone/oppo-a7-green-400x400.jpg", "Điện Thoại", "on");
phone[1] = new san_pham("phone1", 0, "Samsung Galaxy Note 9", 76000000, "image/phone/samsung-galaxy-note-9-black-bf-400x400.jpg", "Điện Thoại", "on");
phone[2] = new san_pham("phone2", 0, "iPhone Xr 64GB", 100000000, "image/phone/iphone-xr-black-400x400.jpg", "Điện Thoại", "on");
phone[3] = new san_pham("phone3", 0, "Samsung Galaxy J8", 54000000, "image/phone/samsung-galaxy-j8-600x600-400x400.jpg", "Điện Thoại", "on");
phone[4] = new san_pham("phone4", 0, "Samsung Galaxy A7 (2018)", 62000000, "image/phone/samsung-galaxy-a7-2018-blue-400x400.jpg", "Điện Thoại", "on");
phone[5] = new san_pham("phone5", 0, "Nokia 3.1 32GB", 15000000, "image/phone/nokia-31-docquyen-400x400.jpg", "Điện Thoại", "on");
phone[6] = new san_pham("phone6", 0, "Xiaomi Mi 8 Lite", 68000000, "image/phone/xiaomi-mi-8-lite-black-1-400x400.jpg", "Điện Thoại", "on");
phone[7] = new san_pham("phone7", 0, "Vivo Y71", 94000000, "image/phone/vivo-y71-docquyen-400x400.jpg", "Điện Thoại", "on");
phone[8] = new san_pham("phone8", 0, "iPhone Xs Max 512GB", 30000000, "image/phone/iphone-xs-max-512gb-gold-400x400.jpg", "Điện Thoại", "on");
phone[9] = new san_pham("phone9", 0, "iPhone Xs Max 256GB", 43000000, "image/phone/iphone-xs-max-256gb-white-400x400.jpg", "Điện Thoại", "on");

// -------------------------------------------Hoàn tất khởi tạo----------------------------
// 


function load_don_hang() {
    var s = 0;
    var stt = 1;
    for (var i = 0; i < donhang.length; i++) {
        s += donhang[i].tong_tien;
        document.getElementsByTagName("tbody")[0].innerHTML += '\
                            <tr>\
                                <td>' + (stt++) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + ' VND</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                                <td>\
                                    <button class="xoa_sp">Xóa</button><br>\
                                    <button class="sua_sp">Sửa</button><br>\
                                    <button class="xem_ct">Chi Tiết</button>\
                                </td>\
                            </tr>';
    }
    document.getElementsByTagName("tbody")[0].innerHTML += '\
                <tr>\
                    <td colspan="6" style="color: red;background: white;text-align:right;padding-right:10px">Tổng tiền : ' + s + ' VND</td>\
                </tr>';
}


function load_quan_ly_user() {
    for (var i = 0; i < user.length; i++) {
        document.getElementById('table-user').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
                        <td>' + user[i].name + '</td>\
                        <td>' + user[i].dia_chi + '</td>\
                        <td>' + user[i].sdt + '</td>\
                        <td>' + user[i].email + '</td>\
                        <td>' + user[i].gioi_tinh + '</td>\
                        <td>' + user[i].ngsinh + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}

function load_quan_ly_danh_muc() {
    for (var i = 0; i < danhmuc.length; i++) {
        document.getElementById('table-dm').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
                        <td>' + danhmuc[i].ten + '</td>\
                        <td>' + danhmuc[i].thu_tu + '</td>\
                        <td>' + danhmuc[i].hien_thi + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}

function load_quan_ly_sp() {
    for (var i = 0; i < phone.length; i++) {
        document.getElementById('table-sp').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
                        <td><img src="../' + phone[i].hinh + '" width="110px"></td>\
                        <td>' + phone[i].tensp + '</td>\
                        <td>' + phone[i].gia + '</td>\
                        <td>' + phone[i].loai + '</td>\
                        <td>' + phone[i].masp + '</td>\
                        <td>' + phone[i].hien_thi + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}


//Load nội dung lên từng trang
window.onload = () => {
    url = window.location.href;
    if (url.indexOf('qldh') !== -1) {
        load_don_hang();
        xoa_sua_don_hang();
        document.getElementById('trang_thai').onchange = function() {
            load_trang_thai_don_hang(this.value);
            xem_chi_tiet_hoa_don();
            xoa_sua_don_hang();
        };
        xem_chi_tiet_hoa_don();
    } else if (url.indexOf('qluser') !== -1) {
        load_quan_ly_user();
        xoa_user();
    } else if (url.indexOf('qldm') !== -1) {
        load_quan_ly_danh_muc();
        them_xoa_dm();
    } else if (url.indexOf('qlsp') !== -1) {
        load_quan_ly_sp();
        them_xoa_sp();
    }
};

//Các hàm xử lý đối tượng
//
//
//
//
function popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'block';
}

function close_popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'none';
    try {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'none';
    } catch (e) {
        console.log("Đang ở trang Quản lý Đơn Hàng");
    }
}
//Thêm sự kiện cho nút sửa và xoá
function them_xoa_sp() {
    var sua_sp = document.getElementsByClassName('sua_sp');
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    for (var i = 0; i < sua_sp.length; i++) {
        them_thong_tin_sua_sp(sua_sp[i], i);
        xoa_sp_i(xoa_sp[i], i);
    }
};


// Xoá sp thứ i
function xoa_sp_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}
//load thông tin của sản phẩm lên form sửa sản phẩm
function them_thong_tin_sua_sp(e, i) {
    var sua_sp = document.getElementsByClassName('sua-sp');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        // document.getElementsByClassName('them-ten')[1].value = phone[i].tensp;
        // document.getElementsByClassName('them-stt')[0].value = i + 1;
        // document.getElementsByClassName('them-gia')[1].value = phone[i].gia;
        // document.getElementsByClassName('them-thu-tu')[1].value = phone[i].masp;
        // document.getElementsByClassName('them-loai')[1].value = phone[i].loai;
        var ten_hinh = thong_tin[i * 8 + 1].innerHTML.split(' ')[1].split('/')[3].split('"')[0];
        document.getElementsByClassName('sua-hinh')[0].setAttribute('src', '../image/phone/' + ten_hinh);
        // 

        sua_sp[0].value = thong_tin[i * 8 + 0].innerHTML;
        sua_sp[1].value = thong_tin[i * 8 + 2].innerHTML;
        sua_sp[2].value = thong_tin[i * 8 + 3].innerHTML;
        sua_sp[3].value = thong_tin[i * 8 + 5].innerHTML;
        sua_sp[4].value = "";
        sua_sp[5].value = thong_tin[i * 8 + 4].innerHTML;
    });
}
// Xoá dm thứ i
function xoa_dm_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}


function sua_thong_tin_sp() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var hang = document.querySelectorAll('tbody tr');
    var input = document.querySelectorAll('.popup-themsp__content .sua-sp');
    var i = input[0].value - 1;
    thong_tin[(i) * 8 + 1].innerHTML = '<img src="../image/phone/' + input[4].value.split('\\')[2] + '" width = "110px"></img>';
    thong_tin[(i) * 8 + 2].innerHTML = input[1].value;
    thong_tin[(i) * 8 + 3].innerHTML = input[2].value;
    thong_tin[(i) * 8 + 4].innerHTML = input[5].value;
    thong_tin[(i) * 8 + 5].innerHTML = input[3].value;
    thong_tin[(i) * 8 + 6].innerHTML = input[6].value;
    document.getElementsByClassName('back')[0].click();
    hang[i].className = "sua_thanh_cong";
    setTimeout(() => hang[i].className = "", 2000);
}

//quản lý user
//
function them_mot_user() {
    var input = document.querySelectorAll('.popup-themsp__content .them-user');
    var tr = document.querySelectorAll('tbody tr');
    document.getElementById('table-user').innerHTML += '\
                <tr class="sua_thanh_cong">\
                    <td>' + (tr.length + 1) + '</td>\
                    <td>' + input[0].value + '</td>\
                    <td>' + input[1].value + '</td>\
                    <td>' + input[2].value + '</td>\
                    <td>' + input[3].value + '</td>\
                    <td>' + input[4].value + '</td>\
                    <td>' + input[5].value + '</td>\
                    <td>\
                        <button class="xoa_sp">Xóa</button><br>\
                        <button class="sua_sp">Sửa</button>\
                    </td>\
                </tr>';

    document.getElementsByClassName('back')[0].click();
    document.documentElement.scrollTop = '10000';
}

function xoa_user() {
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    var sua_sp = document.getElementsByClassName('sua_sp');
    for (var i = 0; i < xoa_sp.length; i++) {
        xoa_user_i(xoa_sp[i], i);
        them_thong_tin_sua_user(sua_sp[i], i);
    }
};
//sửa user
function them_thong_tin_sua_user(e, i) {
    var sua_user = document.getElementsByClassName('sua-user');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        sua_user[0].value = thong_tin[i * 8 + 0].innerHTML;
        sua_user[1].value = thong_tin[i * 8 + 1].innerHTML;
        sua_user[2].value = thong_tin[i * 8 + 2].innerHTML;
        sua_user[3].value = thong_tin[i * 8 + 3].innerHTML;
        sua_user[4].value = thong_tin[i * 8 + 4].innerHTML;
        sua_user[5].value = thong_tin[i * 8 + 5].innerHTML;
        sua_user[6].value = thong_tin[i * 8 + 6].innerHTML;
    });
}

function sua_thong_tin_user() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var hang = document.querySelectorAll('tbody tr');
    var input = document.querySelectorAll('.popup-themsp__content .sua-user');
    var i = input[0].value - 1;
    thong_tin[(i) * 8 + 1].innerHTML = input[1].value;
    thong_tin[(i) * 8 + 2].innerHTML = input[2].value;
    thong_tin[(i) * 8 + 3].innerHTML = input[3].value;
    thong_tin[(i) * 8 + 4].innerHTML = input[4].value;
    thong_tin[(i) * 8 + 5].innerHTML = input[5].value;
    thong_tin[(i) * 8 + 6].innerHTML = input[6].value;
    document.getElementsByClassName('back')[0].click();
    hang[i].className = "sua_thanh_cong";
    setTimeout(() => hang[i].className = "", 2000);
}
// Xoá sp thứ i
function xoa_user_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}



//Quản Lý Đơn Hàng
function load_trang_thai_don_hang(va) {
    var s = 0;
    var stt = 1;
    document.getElementsByTagName("tbody")[0].innerHTML = "";
    for (var i = 0; i < donhang.length; i++) {
        if (va == donhang[i].tinh_trang || va == "all") {
            s += donhang[i].tong_tien;
            document.getElementsByTagName("tbody")[0].innerHTML += '\
                            <tr>\
                                <td>' + (stt++) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + ' VND</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                                <td>\
                                    <button class="xoa_sp">Xóa</button><br>\
                                    <button class="sua_sp">Sửa</button><br>\
                                    <button class="xem_ct">Chi Tiết</button>\
                                </td>\
                            </tr>';
        }
    }
    document.getElementsByTagName("tbody")[0].innerHTML += '\
                <tr>\
                    <td colspan="6" style="color: red;background: white;text-align:right;padding-right:10px">Tổng tiền : ' + s + ' VND</td>\
                </tr>';
}

function xem_chi_tiet_hoa_don() {
    var btn = document.getElementsByClassName('xem_ct');
    for (var i = 0; i < btn.length - 1; i++) {
        load_chi_tiet_hoa_don(i, btn[i]);
    }
}

function load_chi_tiet_hoa_don(i, e) {
    e.onclick = () => {
        document.getElementsByClassName('popup-themsp')[0].style.display = "block";
        document.getElementsByClassName('popup-themsp-left__input')[0].innerHTML = donhang[i].khach_hang;
        document.getElementsByClassName('popup-themsp-left__input')[1].innerHTML = donhang[i].thoi_diem;
        document.getElementsByClassName('popup-themsp-left__input')[2].innerHTML = donhang[i].tong_tien;
        document.getElementsByClassName('popup-themsp-left__input')[3].innerHTML = donhang[i].tong_tien;
        document.getElementsByClassName('popup-themsp-left__input')[4].innerHTML = donhang[i].tinh_trang;
    }
}

function xoa_sua_don_hang() {
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    var sua_sp = document.getElementsByClassName('sua_sp');
    for (var i = 0; i < xoa_sp.length; i++) {
        xoa_user_i(xoa_sp[i], i);
        them_thong_tin_sua_don_hang(sua_sp[i], i);
    }
};
//sửa don hang
function them_thong_tin_sua_don_hang(e, i) {
    var sua_user = document.getElementsByClassName('sua-user');
    var thong_tin = document.querySelectorAll('tbody tr td');
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        sua_user[0].value = thong_tin[i * 6 + 0].innerHTML;
        sua_user[1].value = thong_tin[i * 6 + 1].innerHTML;
        sua_user[2].value = thong_tin[i * 6 + 2].innerHTML;
        sua_user[3].value = thong_tin[i * 6 + 3].innerHTML;
        sua_user[4].value = thong_tin[i * 6 + 4].innerHTML;
    });
}

function sua_thong_tin_don_hang() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var hang = document.querySelectorAll('tbody tr');
    var input = document.querySelectorAll('.popup-themsp__content .sua-user');
    var i = input[0].value - 1;
    thong_tin[(i) * 6 + 1].innerHTML = input[1].value;
    thong_tin[(i) * 6 + 2].innerHTML = input[2].value;
    thong_tin[(i) * 6 + 3].innerHTML = input[3].value;
    thong_tin[(i) * 6 + 4].innerHTML = input[4].value;
    document.getElementsByClassName('back')[0].click();
    hang[i].className = "sua_thanh_cong";
    setTimeout(() => hang[i].className = "", 2000);
}

function xoa_user_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}


//quan ly danh muc
//
//load thông tin của sản phẩm lên form sửa danh mục


function them_xoa_dm() {
    var sua_sp = document.getElementsByClassName('sua_sp');
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    for (var i = 0; i < sua_sp.length; i++) {
        them_thong_tin_sua_dm(sua_sp[i], i);
        xoa_dm_i(xoa_sp[i], i);
    }
};

function them_danh_muc() {
    var input = document.querySelectorAll('.popup-themsp__content .them-danh-muc');
    var tr = document.querySelectorAll('tbody tr');
    document.getElementById('table-dm').innerHTML += '\
                <tr class="sua_thanh_cong">\
                    <td>' + (tr.length + 1) + '</td>\
                    <td>' + input[0].value + '</td>\
                    <td>' + input[1].value + '</td>\
                    <td>' + input[2].value + '</td>\
                    <td>\
                        <button class="xoa_sp">Xóa</button><br>\
                        <button class="sua_sp">Sửa</button>\
                    </td>\
                </tr>';

    document.getElementsByClassName('back')[0].click();
    document.documentElement.scrollTop = '10000';
}

function them_mot_sp() {
    var input = document.querySelectorAll('.popup-themsp__content .them-mot-sp');
    var tr = document.querySelectorAll('tbody tr');

    document.getElementById('table-sp').innerHTML += '\
                    <tr class="sua_thanh_cong">\
                        <td>' + (tr.length + 1) + '</td>\
                        <td><img src="../image/phone/' + input[3].value.split('\\')[2] + '" width = "110px"></td>\
                        <td>' + input[0].value + '</td>\
                        <td>' + input[1].value + '</td>\
                        <td>' + input[4].value + '</td>\
                        <td>' + input[2].value + '</td>\
                        <td>' + input[5].value + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    document.getElementsByClassName('back')[0].click();
    document.documentElement.scrollTop = '10000';


}

function them_thong_tin_sua_dm(e, i) {
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        document.getElementsByClassName('stt')[0].value = i + 1;
        document.getElementsByClassName('them-ten')[1].value = danhmuc[i].ten;
        document.getElementsByClassName('them-thu-tu')[1].value = danhmuc[i].thu_tu;
    });
}

function sua_danh_muc() {
    var thong_tin = document.querySelectorAll('tbody tr td');
    var hang = document.querySelectorAll('tbody tr');
    var input = document.querySelectorAll('.popup-themsp__content .sua-dm');
    var i = input[0].value - 1;
    thong_tin[(i) * 5 + 1].innerHTML = input[1].value;
    thong_tin[(i) * 5 + 2].innerHTML = input[2].value;
    thong_tin[(i) * 5 + 3].innerHTML = input[3].value;
    document.getElementsByClassName('back')[0].click();
    hang[i].className = "sua_thanh_cong";
    setTimeout(() => hang[i].className = "", 2000);
}