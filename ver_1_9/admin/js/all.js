/**
 * [DonHang description]
 * @param {[type]} khach_hang [description]
 * @param {[type]} thoi_diem  [description]
 * @param {[type]} tong_tien  [description]
 * @param {[type]} tinh_trang [description]
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
donhang[6] = new DonHang("Lý Nhân Từ", "100/02/2015", 35000000, "Đã giao");
donhang[7] = new DonHang("Hậu Sĩ ", "20/03/2017", 55000000, "Chưa liên lạc");
donhang[8] = new DonHang("Bùi Nhân Văn", "13/03/2017", 10000000, "Đã giao");
donhang[9] = new DonHang("Lý thị Út", "25/03/2015", 11000000, "Chưa giao");
donhang[10] = new DonHang("Nguyễn Bảo", "03/08/2017", 15000000, "Chưa liên lạc");
/**
 * [TheLoai description]
 * @param {[type]} stt      [description]
 * @param {[type]} ten      [description]
 * @param {[type]} thu_tu   [description]
 * @param {[type]} hien_thi [description]
 */
function DanhMuc(ten, thu_tu, hien_thi) {
    this.ten = ten;
    this.thu_tu = thu_tu;
    this.hien_thi = hien_thi;
}
var danhmuc = new Array();
danhmuc[0] = new DanhMuc("Điện Thoại", "1", "Có");
danhmuc[1] = new DanhMuc("Laptop", "2", "Có");
danhmuc[2] = new DanhMuc("Máy Ảnh", "3", "Có");
danhmuc[3] = new DanhMuc("Máy Tính Bảng", "4", "Có");
danhmuc[4] = new DanhMuc("Phụ Kiện", "5", "Có");
danhmuc[5] = new DanhMuc("Điện Lạnh", "6", "Không");
/**
 * [User description]
 * @param  {[type]} name      [description]
 * @param  {[type]} dia_chi   [description]
 * @param  {[type]} sdt       [description]
 * @param  {[type]} email     [description]
 * @param  {[type]} gioi_tinh [description]
 * @param  {[type]} ngsinh    [description]
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
user[16] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv16@gmail.com", "Nữ", "26/06/1999");
user[17] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv17@gmail.com", "Nữ", "26/06/1999");
user[18] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv18@gmail.com", "Nữ", "26/06/1999");
user[19] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv19@gmail.com", "Nữ", "26/06/1999");
user[20] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv20@gmail.com", "Nữ", "26/06/1999");
user[21] = new User("Phạm Thị Thuỳ Linh", "Thái Bình", "3117190063", "asdriv21@gmail.com", "Nữ", "08/05/1999");
user[22] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv22@gmail.com", "Nữ", "26/06/1999");
user[23] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv23@gmail.com", "Nữ", "26/06/1999");
user[24] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv24@gmail.com", "Nữ", "26/06/1999");
/**
 * [san_pham description]
 * @param  {[type]} masp  [description]
 * @param  {[type]} matl  [description]
 * @param  {[type]} tensp [description]
 * @param  {[type]} gia   [description]
 * @param  {[type]} hinh  [description]
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
phone[0] = new san_pham("phone0", 0, "OPPO A7", 20000000, "image/phone/oppo-a7-green-400x400.jpg", "Điện Thoại", "Có");
phone[1] = new san_pham("phone1", 0, "Samsung Galaxy Note 9", 76000000, "image/phone/samsung-galaxy-note-9-black-bf-400x400.jpg", "Điện Thoại", "Có");
phone[2] = new san_pham("phone2", 0, "iPhone Xr 64GB", 100000000, "image/phone/iphone-xr-black-400x400.jpg", "Điện Thoại", "Có");
phone[3] = new san_pham("phone3", 0, "Samsung Galaxy J8", 54000000, "image/phone/samsung-galaxy-j8-600x600-400x400.jpg", "Điện Thoại", "Có");
phone[4] = new san_pham("phone4", 0, "Samsung Galaxy A7 (2018)", 62000000, "image/phone/samsung-galaxy-a7-2018-blue-400x400.jpg", "Điện Thoại", "Có");
phone[5] = new san_pham("phone5", 0, "Nokia 3.1 32GB", 15000000, "image/phone/nokia-31-docquyen-400x400.jpg", "Điện Thoại", "Có");
phone[6] = new san_pham("phone6", 0, "Xiaomi Mi 8 Lite", 68000000, "image/phone/xiaomi-mi-8-lite-black-1-400x400.jpg", "Điện Thoại", "Có");
phone[7] = new san_pham("phone7", 0, "Vivo Y71", 94000000, "image/phone/vivo-y71-docquyen-400x400.jpg", "Điện Thoại", "Có");
phone[8] = new san_pham("phone8", 0, "iPhone Xs Max 512GB", 30000000, "image/phone/iphone-xs-max-512gb-gold-400x400.jpg", "Điện Thoại", "Có");
phone[9] = new san_pham("phone9", 0, "iPhone Xs Max 256GB", 43000000, "image/phone/iphone-xs-max-256gb-white-400x400.jpg", "Điện Thoại", "Có");

// -------------------------------------------Hoàn tất khởi tạo----------------------------
// 


function load_don_hang() {
    var s = 0;
    for (var i = 0; i < donhang.length; i++) {
        s += donhang[i].tong_tien;
        document.getElementById('table-dh').innerHTML += '\
                            <tr>\
                                <td>' + (i + 1) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + ' VND</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                            </tr>';
    }
    document.getElementById('table-dh').innerHTML += '\
                <tr>\
                    <td colspan="5" style="color: red;background: white;text-align:right;padding-right:10px">Tổng tiền : ' + s + ' VND</td>\
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
    } else if (url.indexOf('qluser') !== -1) {
        load_quan_ly_user();
    } else if (url.indexOf('qldm') !== -1) {
        load_quan_ly_danh_muc();
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
    document.getElementsByClassName('popup-themsp')[1].style.display = 'none';
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
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        document.getElementsByClassName('them-ten')[1].value = phone[i].tensp;
        document.getElementsByClassName('them-gia')[1].value = phone[i].gia;
        document.getElementsByClassName('them-thu-tu')[1].value = phone[i].masp;
        document.getElementsByClassName('them-loai')[1].value = phone[i].loai;
        document.getElementsByClassName('sua-hinh')[0].setAttribute('src', '../' + phone[i].hinh);
    });
}