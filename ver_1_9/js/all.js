var ten_danh_muc_sp = ["Điện thoại", "Laptop", "Máy ảnh", "Máy tính bảng", "Phụ kiện"];
var list_tieu_de = ["THE BEST PHONE", "THE BEST LAPTOP", "THE BEST CAMERA", "THE BEST PAD", "THE ACCESSORIES"];




//Khởi tạo giá trị sp (nội dung lấy từ thegioididong)
//-->dán script này vào mục console trên trang https://www.thegioididong.com/xxx
//--> xxx là loại sp cần làm.
//-->Sửa một vài thông số cho phù hợp theo từng loại.END
//--Lấy tên, hình -- còn giá thì cho random
//
//
//
// var list_danh_muc = ['phone', 'laptop', 'camera', 'pad', 'phu-kien'];
// var a = document.querySelectorAll('.homeproduct h3');
// var b = document.querySelectorAll('.homeproduct img[width="180"]');
// var s = '';
// var d = 0;
// var newW = window.open();
// // tl - Sửa theo danh mục -- 0,1,2,3,4
// var tl = 0;

// for (var i = 0; i < a.length && d < 55; i++) {
//     s += list_danh_muc[tl] + '[' + d + '] = new san_pham("' + list_danh_muc[tl] + d + '", ' + tl + ', "' + a[i].innerHTML + '", ' + Math.floor((Math.random() * 100) + (1)) + ', "image/' + list_danh_muc[tl] + '/' + b[d].getAttribute('src').split('/')[7] + '");' + '</br>';
//     d++;
// }
// newW.document.write(s);

// // //Đưa ảnh ra 1 trang để down cho nhanh
// var b = document.querySelectorAll('.homeproduct img[width="180"]');
// var newW = window.open();
// for (var i = 0; i < 55; i++) {
//     newW.document.documentElement.innerHTML += '<img id="fullsized_image_holder" src="' + b[i].getAttribute('src') + '" height="100px" width="100px">';
// }
// //
// //
// var list_danh_muc = ['phone', 'laptop', 'camera', 'pad', 'phu-kien'];
// var a = document.querySelectorAll('.pro-name h3');
// var b = document.querySelectorAll('.pro-img img');
// var s = '';
// var d = 0;
// var newW = window.open();
// // tl - Sửa theo danh mục -- 0,1,2,3,4
// var tl = 2;

// for (var i = 0; i < a.length && d < 55; i++) {
//     s += list_danh_muc[tl] + '[' + d + '] = new san_pham("' + list_danh_muc[tl] + d + '", ' + tl + ', "' + a[i].innerHTML + '", ' + Math.floor((Math.random() * 100) + (1)) + ', "image/' + list_danh_muc[tl] + '/' + b[d].getAttribute('src').split('/')[4] + '");' + '</br>';
//     d++;
// }
// newW.document.write(s);
// // 
// // END.





function san_pham(masp, matl, tensp, gia, hinh) {
    this.masp = masp;
    this.matl = matl;
    this.tensp = tensp;
    this.gia = gia;
    this.hinh = hinh;
}
//khởi tạo mảng sản phẩm điện thoại
var phone = new Array();

phone[0] = new san_pham("phone0", 0, "OPPO A7", 20, "image/phone/oppo-a7-green-400x400.jpg");
phone[1] = new san_pham("phone1", 0, "Samsung Galaxy Note 9", 76, "image/phone/samsung-galaxy-note-9-black-bf-400x400.jpg");
phone[2] = new san_pham("phone2", 0, "iPhone Xr 64GB", 100, "image/phone/iphone-xr-black-400x400.jpg");
phone[3] = new san_pham("phone3", 0, "Samsung Galaxy J8", 54, "image/phone/samsung-galaxy-j8-600x600-400x400.jpg");
phone[4] = new san_pham("phone4", 0, "Samsung Galaxy A7 (2018)", 62, "image/phone/samsung-galaxy-a7-2018-blue-400x400.jpg");
phone[5] = new san_pham("phone5", 0, "Nokia 3.1 32GB", 15, "image/phone/nokia-31-docquyen-400x400.jpg");
phone[6] = new san_pham("phone6", 0, "Xiaomi Mi 8 Lite", 68, "image/phone/xiaomi-mi-8-lite-black-1-400x400.jpg");
phone[7] = new san_pham("phone7", 0, "Vivo Y71", 94, "image/phone/vivo-y71-docquyen-400x400.jpg");
phone[8] = new san_pham("phone8", 0, "iPhone Xs Max 512GB", 30, "image/phone/iphone-xs-max-512gb-gold-400x400.jpg");
phone[9] = new san_pham("phone9", 0, "iPhone Xs Max 256GB", 43, "image/phone/iphone-xs-max-256gb-white-400x400.jpg");
phone[10] = new san_pham("phone10", 0, "iPhone Xs 256GB", 19, "image/phone/iphone-xs-256gb-white-400x400.jpg");
phone[11] = new san_pham("phone11", 0, "iPhone Xs Max 64GB", 84, "image/phone/iphone-xs-max-gray-400x400.jpg");
phone[12] = new san_pham("phone12", 0, "iPhone X 256GB Gray", 23, "image/phone/iphone-x-256gb-a1-600x600-600x600-400x400.jpg");
phone[13] = new san_pham("phone13", 0, "iPhone X 256GB Silver", 70, "image/phone/iphone-x-256gb-silver-400x400.jpg");
phone[14] = new san_pham("phone14", 0, "iPhone Xs 64GB", 86, "image/phone/iphone-xs-gold-400x400.jpg");
phone[15] = new san_pham("phone15", 0, "Samsung Galaxy Note 9 512GB", 67, "image/phone/samsung-galaxy-note-9-512gb-blue-400x400.jpg");
phone[16] = new san_pham("phone16", 0, "iPhone X 64GB Gray", 35, "image/phone/iphone-x-64gb-21-400x400.jpg");
phone[17] = new san_pham("phone17", 0, "iPhone X 64GB Silver", 39, "image/phone/iphone-x-64gb-silver-400x400.jpg");
phone[18] = new san_pham("phone18", 0, "iPhone Xr 256GB", 34, "image/phone/iphone-xr-256gb-white-400x400.jpg");
phone[19] = new san_pham("phone19", 0, "iPhone Xr 128GB", 28, "image/phone/iphone-xr-128gb-red-400x400.jpg");
phone[20] = new san_pham("phone20", 0, "Samsung Galaxy S9+ 128GB", 86, "image/phone/samsung-galaxy-s9-plus-128gb-600x600-600x600-400x400.jpg");
phone[21] = new san_pham("phone21", 0, "iPhone 7 Plus 256GB", 3, "image/phone/iphone-7-plus-256gb-hh-400x400.jpg");
phone[22] = new san_pham("phone22", 0, "Samsung Galaxy S9+ 64GB", 31, "image/phone/samsung-galaxy-s9-plus-64gb-xanh-san-ho-2-1-400x400.jpg");
phone[23] = new san_pham("phone23", 0, "iPhone 8 256GB", 89, "image/phone/iphone-8-256gb-hh-400x400.jpg");
phone[24] = new san_pham("phone24", 0, "Huawei Mate 20 Pro", 59, "image/phone/huawei-mate-20-pro-green-400x400.jpg");
phone[25] = new san_pham("phone25", 0, "iPhone 8 Plus 64GB", 1, "image/phone/iphone-8-plus-hh-400x400.jpg");
phone[26] = new san_pham("phone26", 0, "OPPO Find X", 68, "image/phone/oppo-find-x-1-400x400.jpg");
phone[27] = new san_pham("phone27", 0, "Samsung Galaxy Note 8", 69, "image/phone/samsung-galaxy-note8-black-bf-1-400x400.jpg");
phone[28] = new san_pham("phone28", 0, "iPhone 7 Plus 32GB", 100, "image/phone/iphone-7-plus-32gb-hh-400x400.jpg");
phone[29] = new san_pham("phone29", 0, "iPhone 8 64GB", 30, "image/phone/iphone-8-64gb-hh-400x400.jpg");
phone[30] = new san_pham("phone30", 0, "Huawei Mate 20", 83, "image/phone/huawei-mate-20-black-400x400.jpg");
phone[31] = new san_pham("phone31", 0, "iPhone 7 32GB", 19, "image/phone/iphone-7-hh-400x400.jpg");
phone[32] = new san_pham("phone32", 0, "Xiaomi Mi 8", 73, "image/phone/xiaomi-mi-8-1-400x400.jpg");
phone[33] = new san_pham("phone33", 0, "Samsung Galaxy A8 Star", 38, "image/phone/samsung-galaxy-a8-star-black-400x400.jpg");
phone[34] = new san_pham("phone34", 0, "Samsung Galaxy A9 (2018)", 59, "image/phone/samsung-galaxy-a9-2018-blue-400x400.jpg");
phone[35] = new san_pham("phone35", 0, "Samsung Galaxy A8+ (2018)", 42, "image/phone/samsung-galaxy-a8-plus-2018-gold-400x400.jpg");
phone[36] = new san_pham("phone36", 0, "iPhone 6s Plus 32GB", 21, "image/phone/iphone-6s-plus-32gb-vang-hong-400x400.png");
phone[37] = new san_pham("phone37", 0, "Samsung Galaxy A8 (2018)", 95, "image/phone/samsung-galaxy-a8-2018-purple-400x400.jpg");
phone[38] = new san_pham("phone38", 0, "Vivo V11", 30, "image/phone/vivo-v11-400x400.jpg");
phone[39] = new san_pham("phone39", 0, "Huawei Nova 3", 2, "image/phone/huawei-nova-3-2-400x400.jpg");
phone[40] = new san_pham("phone40", 0, "Samsung Galaxy A7 (2018) 128GB", 48, "image/phone/samsung-galaxy-a7-2018-128gb-black-400x400.jpg");
phone[41] = new san_pham("phone41", 0, "OPPO F9 6GB", 81, "image/phone/oppo-f9-6gb-red-400x400.jpg");
phone[42] = new san_pham("phone42", 0, "Samsung Galaxy A6+ (2018)", 45, "image/phone/samsung-galaxy-a6-plus-2018-xanh-400x400.jpg");
phone[43] = new san_pham("phone43", 0, "Nokia 7 plus", 86, "image/phone/nokia-7-plus-2-400x400.jpg");
phone[44] = new san_pham("phone44", 0, "OPPO F9", 77, "image/phone/oppo-f9-bf-1-400x400.jpg");
phone[45] = new san_pham("phone45", 0, "Vivo V11i", 33, "image/phone/vivo-v11i-blue-400x400.jpg");
phone[46] = new san_pham("phone46", 0, "HTC U12 life", 53, "image/phone/htc-u12-life-1-400x400.jpg");
phone[47] = new san_pham("phone47", 0, "Vivo V9", 19, "image/phone/vivo-v9-2-1-600x600-400x400.jpg");
phone[48] = new san_pham("phone48", 0, "iPhone 6 32GB", 47, "image/phone/iphone-6-32gb-gold-hh-600x600-600x600-400x400.jpg");
phone[49] = new san_pham("phone49", 0, "Realme 2 Pro 8GB/128GB", 22, "image/phone/oppo-realme-2-pro-black-400x400.jpg");
phone[50] = new san_pham("phone50", 0, "OPPO F7", 67, "image/phone/oppo-f7-bac-400x400.jpg");
phone[51] = new san_pham("phone51", 0, "OPPO F7 128GB", 18, "image/phone/oppo-f7-128gb-den-400x400.jpg");
phone[52] = new san_pham("phone52", 0, "Samsung Galaxy J7+", 71, "image/phone/samsung-galaxy-j7-plus-hh-400x400.jpg");
phone[53] = new san_pham("phone53", 0, "Xiaomi Mi A2", 77, "image/phone/xiaomi-mi-a2-blue-400x400.jpg");
phone[54] = new san_pham("phone54", 0, "Nokia 6.1 Plus", 90, "image/phone/nokia-61-plus-2-400x400.jpg");





//khởi tạo mảng sản phẩm laptop
var laptop = new Array();

laptop[0] = new san_pham("laptop0", 1, "HP Pavilion 14 ce0021TU i3 8130U(4MF00PA)", 67, "image/laptop/hp-pavilion-14-ce0021tu-i-4mf00pa-33397-ava1-400x400.jpg");
laptop[1] = new san_pham("laptop1", 1, "Dell Inspiron 3576 i5 8250U (P63F002N76F)", 23, "image/laptop/dell-inspiron-3576-p63f002n76f-450-400x400.png");
laptop[2] = new san_pham("laptop2", 1, "Asus VivoBook S15 S510UA i5 8250U (BQ414T)", 43, "image/laptop/asus-s510ua-i5-8250u-bq414t-dai-dien-450x300-400x400.jpg");
laptop[3] = new san_pham("laptop3", 1, "Acer Aspire E5 576 34ND i3 8130U (NX.GRYSV.004)", 27, "image/laptop/acer-aspire-e5-576-34nd-nxgrysv004-400x400.jpg");
laptop[4] = new san_pham("laptop4", 1, "Dell Vostro 3468 i5 7200U", 50, "image/laptop/dell-vostro-3468-i5-7200u-den-450x300-230x153.png");
laptop[5] = new san_pham("laptop5", 1, "HP 15 da0054TU i3 7020U (4ME68PA)", 49, "image/laptop/hp-15-da0054tu-4me68pa-thumb-400x400.jpg");
laptop[6] = new san_pham("laptop6", 1, "Acer Aspire E5 476 i3 8130U (NX.GWTSV.002) Xám", 47, "image/laptop/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg");
laptop[7] = new san_pham("laptop7", 1, "HP Envy 13 ah0025TU i5 8250U (4ME92PA)", 65, "image/laptop/hp-envy-13-ah0025tu-4me92pa-400x400.jpg");
laptop[8] = new san_pham("laptop8", 1, "Lenovo IdeaPad 130 14IKB i3 7020U (81H60017VN)", 58, "image/laptop/lenovo-ideapad-130-14ikb-81h60017vn-ava-400x400.jpg");
laptop[9] = new san_pham("laptop9", 1, "HP Pavilion x360 cd0082TU i3 8130U (4MF15PA)", 10, "image/laptop/hp-pavilion-x360-cd0082tu-4mf15pa-450-400x400.jpg");
laptop[10] = new san_pham("laptop10", 1, "Dell Inspiron 5570 i5 8250U (M5I5238W)", 62, "image/laptop/dell-inspiron-5570-m5i5238w-office365-dai-dien-450x300-400x400.jpg");
laptop[11] = new san_pham("laptop11", 1, "HP 15 da0055TU i3 7020U (4NA89PA)", 92, "image/laptop/hp-15-da0055tu-4na89pa-400x400.jpg");
laptop[12] = new san_pham("laptop12", 1, "Asus VivoBook S15 S510UA i3 8130U (BQ222T)", 100, "image/laptop/asus-s510ua-bq222t-thumbava-400x400.jpg");
laptop[13] = new san_pham("laptop13", 1, "Dell Vostro 5568 i5 7200U (077M52)", 73, "image/laptop/dell-vostro-5568-077m52-vangdong-450x300-450x300-400x400.png");
laptop[14] = new san_pham("laptop14", 1, "HP 15 da0036TX i7 8550U (4ME78PA)", 21, "image/laptop/hp-15-da0036tx-4me78pa-cava-400x400.jpg");
laptop[15] = new san_pham("laptop15", 1, "HP 15 da0058TU i5 8250U (4NA92PA)", 38, "image/laptop/hp-15-da0058tu-4na92pa-33397-ava1-400x400.jpg");
laptop[16] = new san_pham("laptop16", 1, "Acer Aspire E5 576G 52YQ i5 8250U (NX.GWNSV.001)", 23, "image/laptop/acer-aspire-e5-576g-52yq-nxgwnsv001-thumb-400x400.jpg");
laptop[17] = new san_pham("laptop17", 1, "Lenovo Ideapad 330 15IKBR i3 7020U (81DE00LDVN)", 8, "image/laptop/lenovo-ideapad-330-15ikbr-i3-7020u-4gb-1tb-156-win-hinhchitiet-400x400.jpg");
laptop[18] = new san_pham("laptop18", 1, "Dell Vostro 3468 i3 6006U (70142649)", 2, "image/laptop/dell-vostro-3468-70142649-450-400x400.jpg");
laptop[19] = new san_pham("laptop19", 1, "Asus VivoBook S15 S510UA i3 7100U (BQ111T)", 41, "image/laptop/asus-s510ua-i3-7100u-bq111t-thumb-400x400.jpg");
laptop[20] = new san_pham("laptop20", 1, "Lenovo Ideapad S130 11IGM N4000 (81J1001JVN)", 1, "image/laptop/lenovo-ideapad-s130-11igm-n4000-2gb-32gb-81j1001j-33397-thumb1-400x400.jpg");
laptop[21] = new san_pham("laptop21", 1, "Acer Aspire A314 31 C2UX N3350 (NX.GNSSV.008)", 64, "image/laptop/acer-aspire-a314-31-c2ux-nxgnssv008-ava-1-400x400.jpg");
laptop[22] = new san_pham("laptop22", 1, "Lenovo Ideapad 120S 14IAP N4200 (81A500JYVN)", 77, "image/laptop/lenovo-ideapad-120s-14iap-n4200-4gb-64gb-win10-81-15-400x400.jpg");
laptop[23] = new san_pham("laptop23", 1, "Asus VivoBook X441MA N5000 (GA004T)", 27, "image/laptop/asus-x441ma-n5000-ga004t-450-400x400.jpg");
laptop[24] = new san_pham("laptop24", 1, "Acer Aspire A315 31 P2LJ N4200 (NX.GNTSV.010)", 12, "image/laptop/acer-aspire-a315-31-p2lj-nxgntsv010-ava-400x400.jpg");
laptop[25] = new san_pham("laptop25", 1, "HP 15 da0048TU N5000 (4ME63PA)", 75, "image/laptop/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg");
laptop[26] = new san_pham("laptop26", 1, "Asus X441MA N5000 (GA024T)", 73, "image/laptop/asus-x441ma-ga024t-450-400x400.jpg");
laptop[27] = new san_pham("laptop27", 1, "Acer Aspire A315 51 31X0 i3 6006U (NX.GNPSV.016)", 82, "image/laptop/acer-aspire-a315-51-31x0-i3-6006u-den-0-230x153.jpg");
laptop[28] = new san_pham("laptop28", 1, "Lenovo IdeaPad 320 15IKBN i3 7130U (80XL03SNVN)", 3, "image/laptop/lenovo-ideapad-320-15ikbn-i3-7130u-80xl03snvn-dai-dien-450x300-450x300-400x400.jpg");
laptop[29] = new san_pham("laptop29", 1, "Asus X407UA i3 7020U (BV351T)", 83, "image/laptop/asus-x407ua-bv351t-450-400x400.jpg");
laptop[30] = new san_pham("laptop30", 1, "Lenovo Ideapad 330 14IKBR i3 7020U (81G2001AVN)", 3, "image/laptop/lenovo-ideapad-330-14ikb-81g2001avn-33397-thumb-400x400.jpg");
laptop[31] = new san_pham("laptop31", 1, "Asus VivoBook X407UA i3 6006U (BV129T)", 18, "image/laptop/laptop-asus-x407ua-i3-bv129t-1-450x300-400x400.jpg");
laptop[32] = new san_pham("laptop32", 1, "Asus X507UA i3 7020U (EJ727T)", 97, "image/laptop/laptop-asus-x507ua-i3-7020u-4gb-1tb-win10-ej727t-400x400.jpg");



//khởi tạo mảng sản phẩm camera
var camera = new Array();

camera[0] = new san_pham("camera0", 2, "Máy Ảnh Canon EOS 750D Kit EF S18-55 IS STM", 81, "image/camera/750d-moi-jpg-jpg.jpg");
camera[1] = new san_pham("camera1", 2, "Máy Ảnh Canon EOS M10 Kit EF-M15-45 (Đen)", 86, "image/camera/may-anh-canon-eos-m10-kit-efm1545-den(2).jpg");
camera[2] = new san_pham("camera2", 2, "Máy Ảnh Sony CyberShot DSC H300 (Đen)", 92, "image/camera/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg");
camera[3] = new san_pham("camera3", 2, "Máy Ảnh Fujifilm X-A3 Kit XC16-50 F3.5-5.6 OIS II (bạc)", 59, "image/camera/fujifilm-x-a3(2).jpg");
camera[4] = new san_pham("camera4", 2, "Máy Ảnh Canon EOS M10 Kit EF-M15-45 (Trắng)", 21, "image/camera/canon-m10-kit-efm1545mm(1).jpg");
camera[5] = new san_pham("camera5", 2, "Máy Ảnh Fujifilm X-A5 Body", 23, "image/camera/may-anh-fujifilm-x-a5-body.jpg");
camera[6] = new san_pham("camera6", 2, "Máy Ảnh Sony DSC-WX800", 24, "image/camera/may-anh-sony-dsc-wx800.jpg");
camera[7] = new san_pham("camera7", 2, "MÁY ẢNH CANON EOS M50 + EF-M 22MM F2 STM", 77, "image/camera/may-anh-canon-eos-m50-ef-m22mm-f2-stm.jpg");
camera[8] = new san_pham("camera8", 2, "MÁY ẢNH CANON EOS M6 + EF-M 22MM F2 STM", 16, "image/camera/may-anh-canon-eos-m6-ef-m22mm-f2-stm.jpg");
camera[9] = new san_pham("camera9", 2, "Máy Ảnh Nikon Z7 + Kit NIKKOR Z 24-70mm f/4 S", 54, "image/camera/may-anh-nikon-z7-kit-nikkor-z-2470mmf4s.jpg");
camera[10] = new san_pham("camera10", 2, "Máy Ảnh Canon EOS 750D Kit EF S18-55 IS STM", 2, "image/camera/750d-moi-jpg-jpg.jpg");
camera[11] = new san_pham("camera11", 2, "Máy Ảnh Canon EOS M10 Kit EF-M15-45 (Đen)", 99, "image/camera/may-anh-canon-eos-m10-kit-efm1545-den(2).jpg");
camera[12] = new san_pham("camera12", 2, "Máy Ảnh Sony CyberShot DSC H300 (Đen)", 67, "image/camera/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg");
camera[13] = new san_pham("camera13", 2, "Máy Ảnh Fujifilm X-A3 Kit XC16-50 F3.5-5.6 OIS II (bạc)", 86, "image/camera/fujifilm-x-a3(2).jpg");
camera[14] = new san_pham("camera14", 2, "Máy Ảnh Canon EOS M10 Kit EF-M15-45 (Trắng)", 31, "image/camera/canon-m10-kit-efm1545mm(1).jpg");
camera[15] = new san_pham("camera15", 2, "Máy Ảnh Sony Alpha A6000 (ILCE-6000L) kit 16-50 F3.5-5.6", 5, "image/camera/alpha-a6000-16-50-oss-f3-5-5-6-lens-kit--den--jpg.jpg");
camera[16] = new san_pham("camera16", 2, "Máy Ảnh Canon PowerShot G7 X Mark II (hàng nhập khẩu)", 81, "image/camera/canon-powershot-g7-x-mark-ii(1).jpg");
camera[17] = new san_pham("camera17", 2, "Máy Ảnh Sony CyberShot DSC H400 (Đen)", 27, "image/camera/h400-moi-jpg.jpg");
camera[18] = new san_pham("camera18", 2, "Máy Ảnh Fujifilm X-A3 Kit XC16-50 F3.5-5.6 OIS II (Nâu)", 96, "image/camera/may-anh-fujifilm-xa3-kit-xc1650-f3556-ois-ii-nau(1).jpg");
camera[19] = new san_pham("camera19", 2, "Máy ảnh Nikon D3400 Kit AF-P 18-55 VR", 30, "image/camera/nikon-d3400(2).jpg");
camera[20] = new san_pham("camera20", 2, "Máy Ảnh Sony Alpha A6000 (ILCE-6000L) kit 16-50 F3.5-5.6", 35, "image/camera/img-jpg.jpg");
camera[21] = new san_pham("camera21", 2, "Máy Ảnh Canon Ixus 185 (Đen)", 12, "image/camera/may-anh-canon-ixus-185--den--jpg.jpg");
camera[22] = new san_pham("camera22", 2, "Máy Ảnh Sony Alpha A6000 (ILCE-6000) Body (đen)", 77, "image/camera/sony-alpha-a6000-body-jpg.jpg");
camera[23] = new san_pham("camera23", 2, "Máy Ảnh Sony Alpha A6000 (ILCE-6000L) kit 16-50 F3.5-5.6", 7, "image/camera/a6000-xam2-jpg.jpg");
camera[24] = new san_pham("camera24", 2, "Máy Ảnh Canon PowerShot SX430 IS", 89, "image/camera/may-anh-canon-powershot-sx430-is-jpg.jpg");
camera[25] = new san_pham("camera25", 2, "Máy Ảnh Sony DSC WX220 (Đen)", 51, "image/camera/wx220d-jpg.jpg");
camera[26] = new san_pham("camera26", 2, "Máy Ảnh Sony Alpha A6300 (ILCE-6300L) KIT 16-50 F3.5-5.6", 72, "image/camera/may-anh-sony-alpha--a6300--ilce-6000l--kit-16-50-f3-5-5-6-oss--den--jpg.jpg");
camera[27] = new san_pham("camera27", 2, "Máy ảnh Fujifilm X-A5 Kit 15-45 mm F 3.5.5.6 OIS PZ (Nâu)", 19, "image/camera/fujifilm-xa5-kit-1545-mm-f-3556-ois-pz-nau(1).jpg");
camera[28] = new san_pham("camera28", 2, "Máy Ảnh Sony Cybershot DSC W830 (Đen)", 39, "image/camera/w830den-jpg.jpg");
camera[29] = new san_pham("camera29", 2, "Máy Ảnh Canon EOS 6D Body", 28, "image/camera/may-anh-canon-eos-6d-body-jpg.jpg");
camera[30] = new san_pham("camera30", 2, "Máy Ảnh Canon EOS 6D Kit EF 24-105 F4L IS USM", 21, "image/camera/canon-eos-6d1-jpg.jpg");
camera[31] = new san_pham("camera31", 2, "Máy ảnh Canon PowerShot SX730 HS - Hàng nhập khẩu", 43, "image/camera/may-anh-canon--powershot-sx730-hs--den--jpg.jpg");
camera[32] = new san_pham("camera32", 2, "Máy ảnh Fujifilm X-A5 Kit 15-45 mm F 3.5.5.6 OIS PZ( BẠC)", 86, "image/camera/may-anh-fujifilm-xa5(1).jpg");
camera[33] = new san_pham("camera33", 2, "Máy Ảnh Canon EOS 800D kit EF S18-55 IS STM", 10, "image/camera/may-anh-canon-eos-800d-jpg.jpg");
camera[34] = new san_pham("camera34", 2, "Hộp phim Fujifilm Instax Mini Glossy (20 tấm)", 41, "image/camera/hop-phim-fujifilm-instax-mini-glossy--20-tam--jpg.jpg");
camera[35] = new san_pham("camera35", 2, "Máy Ảnh Canon EOS 750D Body", 40, "image/camera/may-anh-canon-eos-750d-body-jpg.jpg");
camera[36] = new san_pham("camera36", 2, "Máy Ảnh Fujifilm X-A3 Kit XC16-50mm F3.5-5.6 OIS II", 7, "image/camera/fujifilm-xa3-kit-xc1650mm-f3556-ois-ii(3).jpg");
camera[37] = new san_pham("camera37", 2, "Máy Ảnh Canon EOS 3000D Kit 18-55mm F3.5-5.6 III", 53, "image/camera/canon-3000d(1).jpg");

// for (var i = 0; i < 33; i++) {
//     camera[i] = new san_pham(
//         i,
//         2,
//         'Máy ảnh ' + (i + 1),
//         Math.floor((Math.random() * 100) + (1)),
//         'image/camera/camera_' + (i + 1) + '.jpg'
//     );
// }


//khởi tạo mảng sản phẩm Máy tính bảng
var pad = new Array();

pad[0] = new san_pham("pad0", 3, "Samsung Galaxy Tab A 10.5 inch", 52, "image/pad/samsung-galaxy-tab-a-105-inch-ava-400x400.jpg");
pad[1] = new san_pham("pad1", 3, "iPad Wifi 32GB (2018)", 89, "image/pad/ipad-wifi-32gb-2018-thumb-400x400.jpg");
pad[2] = new san_pham("pad2", 3, "iPad Wifi 128 GB (2018)", 79, "image/pad/ipad-wifi-128-gb-2018-thumb-400x400.jpg");
pad[3] = new san_pham("pad3", 3, "iPad Pro 10.5 inch Wifi Cellular 64GB (2017)", 81, "image/pad/ipad-pro-105-inch-wifi-cellular-64gb-2017-thumb-400x400.jpg");
pad[4] = new san_pham("pad4", 3, "Samsung Galaxy Tab S4 10.5 inch S-Pen", 16, "image/pad/samsung-galaxy-tab-s4-105-inch-thumb-400x400.jpg");
pad[5] = new san_pham("pad5", 3, "iPad Pro 10.5 inch Wifi 64GB (2017)", 48, "image/pad/ipad-pro-105-inch-wifi-64gb-2017-thumb-600x600-400x400.jpg");
pad[6] = new san_pham("pad6", 3, "iPad Wifi Cellular 128GB (2018)", 7, "image/pad/ipad-wifi-cellular-128gb-2018-thumb-400x400.jpg");
pad[7] = new san_pham("pad7", 3, "iPad Wifi Cellular 32GB (2018)", 37, "image/pad/ipad-wifi-cellular-32g-2018-thumb-400x400.jpg");
pad[8] = new san_pham("pad8", 3, "iPad Wifi Cellular 32GB (2017)", 27, "image/pad/ipad-wifi-cellular-32gb-2017-thumb-400x400.jpg");
pad[9] = new san_pham("pad9", 3, "Samsung Galaxy Tab A6 10.1 Spen", 19, "image/pad/samsung-galaxy-tab-a6-101-spen-thumb-400x400.jpg");
pad[10] = new san_pham("pad10", 3, "Huawei MediaPad M3 8.0 (2017)", 16, "image/pad/huawei-mediapad-m3-thumb-400x400.jpg");
pad[11] = new san_pham("pad11", 3, "Samsung Galaxy Tab A 8.0 (2017)", 33, "image/pad/samsung-galaxy-tab-a-80-2017-thumb-400x400.jpg");
pad[12] = new san_pham("pad12", 3, "Huawei MediaPad T3 10 (2017)", 30, "image/pad/huawei-mediapad-t3-10-thumb-400x400.jpg");
pad[13] = new san_pham("pad13", 3, "Samsung Galaxy Tab E 9.6 (SM-T561)", 22, "image/pad/samsung-galaxy-tab-e-96-sm-t561-thumb-400x400.jpg");
pad[14] = new san_pham("pad14", 3, "Huawei MediaPad T3 8.0 (2017)", 49, "image/pad/huawei-mediapad-t3-80-564-600x600-400x400.jpg");
pad[15] = new san_pham("pad15", 3, "Lenovo Tab 4 8 16GB (TB-8504X)", 51, "image/pad/lenovo-tab-4-8-tb-8504x-thumb-400x400.jpg");
pad[16] = new san_pham("pad16", 3, "Lenovo Phab 2", 22, "image/pad/lenovo-phab2-543-600x600-400x400.jpg");
pad[17] = new san_pham("pad17", 3, "Samsung Galaxy Tab A6 7.0", 55, "image/pad/samsung-galaxy-tab-a6-70-thumb-400x400.jpg");
pad[18] = new san_pham("pad18", 3, "Mobell Tab 10", 66, "image/pad/mobell-tab-10-2-400x400.jpg");
pad[19] = new san_pham("pad19", 3, "Mobell Tab 8 Pro", 15, "image/pad/mobell-tab-8-pro-thumb-400x400.jpg");
pad[20] = new san_pham("pad20", 3, "Lenovo Tab 7 Essential 16GB (TB-7304X)", 33, "image/pad/lenovo-tab-7-essential-16gb-tb-7304x-thumb-400x400.jpg");
pad[21] = new san_pham("pad21", 3, "Itel Tab it1703", 20, "image/pad/itel-tab-it1703-thumb-600x600-400x400.jpg");
pad[22] = new san_pham("pad22", 3, "Itel Tab it1702", 70, "image/pad/itel-tab-it1702-thumb-600x600-400x400.jpg");
pad[23] = new san_pham("pad23", 3, "Mobell Tab 7s", 16, "image/pad/mobell-tab-7s-thumb-400x400.jpg");



//khởi tạo mảng sản phẩm Phụ kiện
var phu_kien = new Array();


phu_kien[0] = new san_pham("phu_kien0", 4, "Dây cáp Micro USB 0.2 m Xmobile MU03", 20, "image/phu-kien/cap-micro-usb-20cm-x-mobile-mu03-den-avatar-1-600x600.jpg");
phu_kien[1] = new san_pham("phu_kien1", 4, "Dây cáp iPhone 4 - iPhone 4s 1 m Xmobile", 83, "image/phu-kien/cap-x-mobile-iphone-4-ava-600x600.jpg");
phu_kien[2] = new san_pham("phu_kien2", 4, "Sạc dây Type C 1A 1m Xmobile DS199-WB Trắng", 19, "image/phu-kien/sac-day-type-c-1a-1m-xmobile-ds199-wb-ava-600x600.jpg");
phu_kien[3] = new san_pham("phu_kien3", 4, "Dây cáp Micro USB 1 m eSaver DS118-TB", 14, "image/phu-kien/cap-micro-1m-esaver-ds118br-tb-avatar-1-600x600.jpg");
phu_kien[4] = new san_pham("phu_kien4", 4, "Dây cáp Micro USB 0.2 m eSaver DS026", 19, "image/phu-kien/cap-micro-usb-20cm-esaver-ds026-avatar-1-600x600.jpg");
phu_kien[5] = new san_pham("phu_kien5", 4, "Dây cáp Type C 1 m Xmobile MU09-1000", 46, "image/phu-kien/cap-type-c-1m-x-mobile-mu09-1000-avatar-1-600x600.jpg");
phu_kien[6] = new san_pham("phu_kien6", 4, "Dây cáp Lightning 1.2 m Devia Aex", 86, "image/phu-kien/cap-lightning-12m-devia-aex-1-5-600x600.jpg");
phu_kien[7] = new san_pham("phu_kien7", 4, "Dây cáp Lightning 2 m eValu LTL-04", 54, "image/phu-kien/cap-lightning-2m-evalu-ltl-04-xanh-navi-avatar-1-600x600.jpg");
phu_kien[8] = new san_pham("phu_kien8", 4, "Dây cáp Lightning 0.2 m eSaver Gate-0759P", 21, "image/phu-kien/cap-lightning-20cm-esaver-gate-0759p-avatar-1-600x600.jpg");
phu_kien[9] = new san_pham("phu_kien9", 4, "Dây cáp Micro USB 2 m Xmobile MU03", 45, "image/phu-kien/cap-micro-usb-2-m-xmobile-mu03-1000-avatar-1-600x600.jpg");
phu_kien[10] = new san_pham("phu_kien10", 4, "Dây cáp Lightning 1 m eValu LTL-01", 82, "image/phu-kien/cap-lightning-1m-evalu-ltl-01-avatar-1-600x600.jpg");
phu_kien[11] = new san_pham("phu_kien11", 4, "Móc dán điện thoại OSMIA RingCK043 Sao Đen", 24, "image/phu-kien/moc-dan-dien-thoai-osmia-ringck043-sao-den-1-1-600x600.jpg");
phu_kien[12] = new san_pham("phu_kien12", 4, "Móc dán điện thoại OSMIA RingCK039 Cún Trắng", 6, "image/phu-kien/moc-dan-dien-thoai-osmia-ringck039-cun-trang-1-1-600x600.jpg");
phu_kien[13] = new san_pham("phu_kien13", 4, "Móc dán điện thoại OSMIA RingCK036 Viền Hồng", 60, "image/phu-kien/moc-dan-dien-thoai-osmia-ringck036-vien-hong-1-3-600x600.jpg");
phu_kien[14] = new san_pham("phu_kien14", 4, "Adapter sạc 2 cổng 2.4A Xmobile DS133-TB", 13, "image/phu-kien/adapter-sac-2-cong-24a-goc-x-mobile-ds133-tb-trang-avatar-1-600x600.jpg");
phu_kien[15] = new san_pham("phu_kien15", 4, "Tai nghe nhét trong Kanen IP-219 Aqua", 75, "image/phu-kien/tai-nghe-ep-kanen-ip-219-aqua-xam-ava-600x600.jpg");
phu_kien[16] = new san_pham("phu_kien16", 4, "Cáp 2 đầu Lightning Micro 1m eValu Spanker B", 9, "image/phu-kien/cap-2-dau-lightning-micro-1m-evalu-spanker-b-avatar-1-600x600.jpg");
phu_kien[17] = new san_pham("phu_kien17", 4, "Dây cáp Micro USB 0.2 m eSaver BST-0728", 52, "image/phu-kien/cap-micro-usb-20cm-esaver-bst-0728-trang-avatar-1-1-600x600.jpg");
phu_kien[18] = new san_pham("phu_kien18", 4, "Cáp 2 đầu Type C Micro 1m eValu Spanker B Xanh dương", 60, "image/phu-kien/cap-2-dau-type-c-micro-1m-evalu-spanker-b-xanh-ava-600x600.jpg");
phu_kien[19] = new san_pham("phu_kien19", 4, "Sạc dây Nokia đầu nhỏ 1 m eSaver X032", 59, "image/phu-kien/sac-day-nokia-dau-nho-esaver-x032-trang-ava-600x600.jpg");
phu_kien[20] = new san_pham("phu_kien20", 4, "Cáp Type C-Type C 1m M-Best SMXU75 Trắng", 25, "image/phu-kien/cap-type-c-type-c-1m-m-best-smxu75-trang-add-600x600.jpg");
phu_kien[21] = new san_pham("phu_kien21", 4, "Loa Bluetooth Selfie MB-M515 Heo", 2, "image/phu-kien/loa-bluetooth-selfie-icutes-mb-m515-heo-hong-ava-2-600x600.jpg");
phu_kien[22] = new san_pham("phu_kien22", 4, "Adapter sạc 1A Xmobile DS130-TB", 15, "image/phu-kien/adapter-sac-xmobile-ds130-tb-1-cong-ava-1-600x600.jpg");
phu_kien[23] = new san_pham("phu_kien23", 4, "Cáp 3 đầu Micro Type C Lightning eValu Spanker B", 12, "image/phu-kien/cap-3-dau-lightning-type-c-micro-1m-evalu-spanker-ava-600x600.jpg");
phu_kien[24] = new san_pham("phu_kien24", 4, "Cáp 3 đầu Lightning Type C Micro 1m Xmobile AP03-1000", 4, "image/phu-kien/cap-3-dau-lightning-type-c-micro-1m-ap03-1000-1-600x600.jpg");
phu_kien[25] = new san_pham("phu_kien25", 4, "Loa Bluetooth Selfie MB-M515 Gấu", 76, "image/phu-kien/loa-bluetooth-selfie-icutes-mb-m515-gau-xam-ava-600x600.jpg");
phu_kien[26] = new san_pham("phu_kien26", 4, "Adapter sạc 2.4A Xmobile DS132-TB", 85, "image/phu-kien/adapter-sac-xmobile-ds132-tb-2-cong-ava-600x600.jpg");
phu_kien[27] = new san_pham("phu_kien27", 4, "USB 3.1 16 GB Apacer AH356", 11, "image/phu-kien/usb-31-16gb-apacer-ah356-1-2-600x600.jpg");
phu_kien[28] = new san_pham("phu_kien28", 4, "Tai nghe nhét trong Kanen S70", 41, "image/phu-kien/tai-nghe-ep-kanen-s70-den-xanh-la-ava-600x600.jpg");
phu_kien[29] = new san_pham("phu_kien29", 4, "Tai nghe Bluetooth Roman R553N Đen", 53, "image/phu-kien/tai-nghe-bluetooth-roman-r553n-den-ava-600x600.jpg");
phu_kien[30] = new san_pham("phu_kien30", 4, "Sạc dây Micro USB 1.2 m Xmobile TS-C079", 90, "image/phu-kien/sac-day-x-mobile-micro-ts-c079-ava-600x600.jpg");
phu_kien[31] = new san_pham("phu_kien31", 4, "Loa Bluetooth eSaver U220B", 37, "image/phu-kien/loa-bluetooth-esaver-u220b-9-600x600.jpg");
phu_kien[32] = new san_pham("phu_kien32", 4, "Cáp Lightning 1m Xmobile", 29, "image/phu-kien/cap-sac-iphone-5-6-x-mobile-ava-1-600x600.jpg");

// for (var i = 0; i < 33; i++) {
//     phu_kien[i] = new san_pham(
//         i,
//         4,
//         'Phụ kiện ' + (i + 1),
//         Math.floor((Math.random() * 100) + (1)),
//         'image/phu-kien/phu-kien_' + (i + 1) + '.jpg'
//     );
// }

//Khởi tạo mảng chứa các danh mục sản phẩm
var list_danh_muc = [phone, laptop, camera, pad, phu_kien];


//NOTE: Giá tiền random trong hàng chục. Chuỗi .000.000đ chỉ để cho vui ^_^!
//------------------------KHỞI TẠO HOÀN TẤT--------------------------


//chuyển slide banner
function slide_show() {
    var so_slide = 0;
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName('dot');
    showSlides();

    function showSlides() {
        var i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dot[i].className = 'dot';
        }
        if (so_slide > slides.length - 1) {
            so_slide = 1;
        } else
            so_slide++;
        dot[so_slide - 1].className = 'dot dot_active';
        slides[so_slide - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds

    }
};
//Chuyển đến slide thứ n
function show_slide_index(n) {
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName('dot');
    for (i = 0; i < 4; i++) {
        dot[i].className = 'dot';
        slides[i].style.display = "none";
    }
    slides[n].style.display = 'block';
    dot[n].className = 'dot dot_active';
}

// fixed nav và left_menu khi cuộn trang
function fixedElement() {
    var html = document.documentElement;
    var l_menu = document.getElementsByClassName('left_menu')[0];
    var nav = document.getElementsByClassName('nav')[0];
    window.addEventListener('scroll', function() {
        if (html.scrollTop > 120) {
            nav.className = 'nav fixed_nav';
        } else {
            nav.className = 'nav';
        }
        if (html.scrollTop > 680) {
            l_menu.className = 'left_menu fixed_left_menu';
        } else {
            l_menu.className = 'left_menu';
        }
        if (window.location.href.indexOf('gio_hang.html') != -1) {
            var sum_sec = document.getElementsByClassName('summary-section')[0];
            if (html.scrollTop > 700) {
                sum_sec.className = 'summary-section summary-section-fixed';
            } else {
                sum_sec.className = 'summary-section';
            }
        }
    });

};


//tạo menu danh mục sản phẩm
function create_left_menu() {
    var khung = document.getElementsByClassName('list_danh_muc')[0];
    var vt = 0;
    for (var i = 0; i < ten_danh_muc_sp.length; i++) {
        khung.innerHTML += '<a class="use_for_login" href="index.html?' + i + '&' + vt + '">\
      <div class="danh_muc_item">' + ten_danh_muc_sp[i] + '</div>\
    </a>';
    }
};



//Thêm sản phẩm cho trang chính
function create_box() {
    var list_sp = document.getElementsByClassName('list_sp')[0];
    var list_sp_2 = document.getElementsByClassName('list_sp')[1];
    for (var i = 0; i < 8; i++) {
        list_sp.innerHTML += '<div class="product-box">\
        <a class="box" href="thong_tin_sp.html?' + i + '&0">\
          <div class="hinh-sp">\
            <div style="background-image: url(' + phone[i].hinh + ')" class="hinh"></div>\
          </div>\
          <p class="ten-sp">' + phone[i].tensp + '</p>\
          <p class="gia-tien">' + phone[i].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn"  value="' + i + '&0" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
      </div>';
        list_sp_2.innerHTML += '<div class="product-box">\
        <a class="box" href="thong_tin_sp.html?' + i + '&4">\
          <div class="hinh-sp">\
            <div style="background-image: url(' + phu_kien[i].hinh + ')" class="hinh"></div>\
          </div>\
          <p class="ten-sp">' + phu_kien[i].tensp + '</p>\
          <p class="gia-tien">' + phu_kien[i].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
        </a>\
        <div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn" value="' + i + '&4" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
      </div>';
    }

};

//cuộn trang xuống phần nội dung
function go_to_content() {
    var html = document.documentElement;
    html.scrollTop = '583';
    //document.getElementsByClassName('khung_sp')[0].scrollIntoView(true);
}

// phân tích url theo ?{'số thứ tự danh mục'}&{'vị trí bắt đầu load sản phẩm'}
function phan_tich_url() {
    var default_create = 0;
    var code = window.location.href.split('?')[1].split('&');
    //code[0] là thứ tự danh mục
    //code[1] là vị trí bắt đầu load sản phẩm
    var sp = list_danh_muc[code[0]];
    var header = document.getElementsByClassName('khung_sp_header');
    var list_sp = document.getElementsByClassName('list_sp');
    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_luong = 0,
        so_trang = 1;
    //Lướt trang xuống phần nội dung
    if (code[1] >= 12) {
        go_to_content();
    }
    //Ẩn các thanh tiêu đề thừa trong trang chính
    header[1].className += ' hidden';
    list_sp[1].className += ' hidden';
    //Thay đổi nội dung thanh tiêu đề
    document.getElementsByClassName('small_txt')[0].innerHTML = ten_danh_muc_sp[code[0]].toUpperCase();
    document.getElementsByClassName('big_txt')[0].innerHTML = list_tieu_de[code[0]];
    //Load các hộp sản phẩm
    for (var i = parseFloat(code[1]); i < sp.length && so_luong < 12; i++) {
        so_luong++;
        list_sp[0].innerHTML += '<div class="product-box">\
                      <a class="box" href="thong_tin_sp.html?' + i + '&' + code[0] + '">\
                        <div class="hinh-sp">\
                          <img src="' + sp[i].hinh + '" class="hinh"></img>\
                        </div>\
                        <p class="ten-sp">' + sp[i].tensp + '</p>\
                        <p class="gia-tien">' + sp[i].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                    </div>';
    }

    so_trang = Math.ceil(sp.length / 12);
    var temp = code[1];
    for (var i = 1; i <= so_trang; i++) {
        code[1] = (i - 1) * 12;
        chuyen_trang.innerHTML +=
            '<a href="index.html?' + code[0] + '&' + code[1] + '" class="so_trang">' + i + '</a>';
    }

    //khóa số trang hiện tại
    var trang_can_block = document.getElementsByClassName('so_trang')[temp / 12];
    trang_can_block.className += ' block_trang';
    //thêm số trang hiện tại vào tiêu đề
    document.getElementsByClassName('big_txt')[0].innerHTML +=
        '<span style="letter-spacing:0;padding:0;margin:0;"> - PAGE - ' + (temp / 12 + 1) + '</span>';
};

//Mở thông báo đăng nhập --KHÔNG CẦN NỮA
function mo_tbdn() {
    var quaylai = document.getElementById('no');
    var dangnhap = document.getElementById('yes');
    var tbdn = document.getElementById('thong-bao-dang-nhap');
    tbdn.style.display = 'block';
    quaylai.onclick = function() {
            tbdn.style.display = 'none';
        }
        //auto_login(dangnhap);
        //
    dangnhap.onclick = function() {
        window.location = 'login.html';
    };
    // localStorage.setItem('tai_khoan', JSON.stringify(obj));
    // alert('Chúng tôi đã tự động tạo tài khoản và đăng nhập dùm bạn.\n Bây giờ bạn có thể tự do mua sắm!');
    // //location.reload();
    // tbdn.style.display = 'none';
    // window.location = 'index.html';
    // }
};

//Tạo sự kiện Khi click vào nút thêm vào giỏ đồ
//  Hành động khi click : phân tích dữ liệu value trong nút "them"
//  và đưa giá trị vào localStorage, gồm "mã của danh mục" 
//  và "mã sản phẩm". Gán tiêu đề cho gói đó dạng box_i
function click_add_to_cart() {
    var them = document.getElementsByClassName('them');
    for (var i = 0; i < them.length; i++) {
        them[i].addEventListener('click', function() {
            var info = this.value.split('&');
            var obj = {
                danh_muc: info[1],
                ma_sp: info[0]
            };
            localStorage.setItem("box_" + localStorage.length, JSON.stringify(obj));
            this.className = 'them them_fade';
        });
    }
}
//xóa box_i trong localStorage
function clear_box() {
    var temp = localStorage.length;
    for (var i = 0; i < temp; i++) {
        console.log('temp = ' + temp);
        if (localStorage.getItem('box_' + i)) {
            localStorage.removeItem('box_' + i);
        }
        console.log('dele = ' + 'deleted_box_' + i);
        localStorage.removeItem('deleted_box_' + i);

    }
}
//Load từ localStorage vào giỏ hàng
function load_gio_hang() {
    var clear = document.getElementsByClassName('clear_all_cart')[0];
    var lclength = localStorage.length;

    // Ẩn hiện nút "Xóa tất cả sản phẩm"
    if (lclength <= 0) {
        clear.style.display = 'none';
    } else {
        clear.style.display = 'inline-block';
    }

    //Xóa dữ liệu trong localSt(trừ tài khoản) và load lại trang
    clear.onclick = function() {
        clear_box();
        location.reload();
    }

    //Bắt đầu load nếu nó không rỗng
    for (var i = 0; i < lclength; i++) {

        //Tìm và lấy giá trị dạng box_i
        var box_index = "box_" + i;
        if (localStorage.getItem(box_index)) {
            var box = JSON.parse(localStorage.getItem(box_index));
            var sp = list_danh_muc[box.danh_muc];
            var key_for_url = box.ma_sp + '&' + box.danh_muc;
            var list_sp = document.getElementsByClassName('list_sp')[0];
            var masp = parseInt(box.ma_sp);
            list_sp.innerHTML += '\
                <div class="cart-item" id="' + box_index + '">\
                    <div class="cart-item-left">\
                        <div  style="background-image: url(' + sp[masp].hinh + ')" class="cart-img" ></div>\
                        <a href="thong_tin_sp.html?' + key_for_url + '" class="cart-heading">' + sp[masp].tensp + '</a><br>\
                        <p class="cart-brand">Thế giới ' + ten_danh_muc_sp[sp[masp].matl] + '</p>\
                        <div class="cart-btn">\
                            <span title="Xóa sản phẩm khỏi giỏ hàng" data-delete="' + box_index + '" class="delete-cart" id=""></span>\
                            <span onclick="alert(\'Bạn đã thích 1 sản phẩm\')" title="I LOVE IT <3" id="heart-cart"></span>\
                        </div>\
                    </div>\
                    <div class="cart-item-right">\
                        <form action="">\
                            <input value="1" type="text" name="" id="numbers_of_cart_item"><br>\
                            <input onclick="alert(\'T ko làm cái này\')" type="button" name="" value="OK">\
                        </form>\
                    </div>\
                    <p class="gia_tien" style="font-size:18px;color:rgb(255, 99, 0);margin:0;padding-top:5px">' + sp[masp].gia + '.000.000đ</p>\
                    <p style="font-size:15px;color:rgb(124, 124, 124);margin:0;padding-top:10px;\
        text-decoration:line-through">500.000.000đ</p>\
                    <p style="font-size:15px;color:rgb(79, 79, 79);margin:0;padding-top:10px; ">-90%</p>\
                </div>'
        }
    }

}


//Cái này cho nút thêm sản phẩm trong trang thong_tin_sp.html
function xac_nhan(e) {
    if (confirm('Xác nhận thêm')) {
        e.className = 'them';
        click_add_to_cart();
        e.setAttribute('onclick', '');
        e.click();
        //setTimeout(e.click,5000);
        e.style.display = 'none';
    }
}

function reload() {
    location.reload();
}

//Khi click nút xác nhận giỏ hàng
function xac_nhan_gio_hang() {
    var tk = JSON.parse(localStorage.getItem('tai_khoan'));
    if (!localStorage.getItem('tai_khoan') || tk.trang_thai_dang_nhap == 0) {
        mo_tbdn();
    } else
    // if(tk.trang_thai_dang_nhap == 0){
    //     mo_tbdn();
    // }
    if (localStorage.length > 1) {
        clear_box();
        alert('Thành công!\nCảm ơn bạn đã mua hàng của chúng tôi');
        location.reload();
    } else {
        alert('Giỏ hàng rỗng');
    }
}


function click_delete_cart() {
    var delete_cart = document.getElementsByClassName('delete-cart');
    for (var i = 0; i < delete_cart.length; i++) {
        delete_cart[i].addEventListener('click', function() {
            if (confirm('Xác nhận xóa')) {
                var key = this.getAttribute('data-delete');
                var cart = document.getElementById(key);
                localStorage.removeItem(key);
                localStorage.setItem('deleted_' + (key), '');
                cart.className = 'cart-item cart-item-hide';
                document.getElementsByClassName('refresh_cart')[0].style.display = 'inline';
                //setTimeout(reload, 160);
            }
        });
    }
}

function url_chi_tiet_sp() {
    var key = window.location.toString().split('?')[1];
    var code = key.split('&');
    var sp = list_danh_muc[code[1]];
    var masp = parseInt(code[0]);
    var hinh = document.getElementsByClassName('ttsp_hinh');
    var ten = document.getElementsByClassName('ten_sp')[0];
    for (var i = 0; i < hinh.length; i++) {
        hinh[i].setAttribute('src', sp[masp].hinh);
    }
    ten.innerHTML = sp[masp].tensp;
    document.getElementsByClassName('gia-tien')[0].innerHTML = sp[masp].gia + '.000.000đ';
}

function tinh_tong_tien() {
    var so_sp = localStorage.length;
    if (localStorage.getItem('tai_khoan')) so_sp--;
    var gia_tien = document.getElementsByClassName('gia_tien');
    var tong_tien = document.getElementsByClassName('tong_tien');
    var sum = 0;
    for (var i = 0; i < gia_tien.length; i++) {
        sum += parseInt(gia_tien[i].innerHTML);
    }
    if (so_sp > 0) {
        tong_tien[0].innerHTML = sum + '.000.000đ';
        tong_tien[1].innerHTML = sum + '.000.000đ';
    }
    document.getElementById('dem_sp').innerHTML = 'Tạm tính (' + so_sp + ' sản phẩm):';
}



function set_value_ttsp_them() {
    var them = document.getElementsByClassName('ttsp_them')[0];
    them.setAttribute('value', window.location.toString().split('?')[1]);
}



function load_tim_kiem() {
    search_selected();
    go_to_content();
    var url = window.location.href;
    var search_value = url.split('search=')[1].split('&')[0].toLowerCase();
    var search_gia = parseInt(url.split('search=')[1].split('&')[1]);
    var search_loai = parseInt(url.split('search=')[1].split('&')[2]);
    var search_gia_min = 0;
    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_trang = 1;
    var vt = 0;
    var dem = 0;
    switch (search_gia) {
        case 10:
            search_gia_min = 1;
            break;
        case 50:
            search_gia_min = 10;
            break;
        case 100:
            search_gia_min = 50;
            break;
        default:
            break;
    }
    for (var i = 0; i < 5; i++) {
        var list = list_danh_muc[i];
        for (var j = 0; j < list.length; j++) {
            var name = spc_to_plus(xoa_dau(list[j].tensp)).toLowerCase();
            if ((name.indexOf(search_value) != -1 || search_value == '') &&
                (search_loai == '-1' || search_loai == i) &&
                (search_gia == '-1' || (search_gia >= list[j].gia && search_gia_min <= list[j].gia))
            ) {
                dem++;
                document.getElementsByClassName('list_sp')[0].innerHTML += '<div class="product-box">\
                      <a class="box" href="thong_tin_sp.html?' + j + '&' + i + '">\
                        <div class="hinh-sp">\
                          <img src="' + list[j].hinh + '" class="hinh"></img>\
                        </div>\
                        <p class="ten-sp">' + list[j].tensp + '</p>\
                        <p class="gia-tien">' + list[j].gia + '.000.000đ<span class="gia-cu">500.000.000đ</span></p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button value="' + j + '&' + i + '" style="button" class="them">Add <img class="icon-cart" src="image/icon/icon-cart.png"></button></div>\
                    </div>';
            }
        }
    }
    fixed_product_title();
    so_trang = Math.ceil(dem / 12);
    for (var i = 1; i <= so_trang; i++) {
        vt = (i - 1) * 12;
        chuyen_trang.innerHTML +=
            '<button class="so_trang" value="' + vt + '">' + i + '</button>';
    }
    chuyen_trang.innerHTML +=
        '<button style="display : none" class="so_trang" value="' + 0 + '">' + 1 + '</button>';

    var trang = document.getElementsByClassName('so_trang');
    // trang[1].className += ' block_trang';    
    for (var i = 0; i < trang.length; i++) {
        trang[i].className = 'so_trang';
    }
    for (var i = 0; i < trang.length; i++) {
        trang[i].addEventListener('click', function() {
            load_sp_tim_kiem_theo_trang(parseInt(this.value));
            go_to_content();
            document.getElementsByClassName('big_txt')[0].innerHTML =
                'YOUR SEARCH<span style="letter-spacing:0"> - PAGE - ' + (this.innerHTML) + '</span>';
            for (var i = 0; i < trang.length; i++) trang[i].className = 'so_trang';
            this.className = 'so_trang block_trang';
        });
    }
    document.getElementsByClassName('big_txt')[0].innerHTML =
        'YOUR SEARCH<span style="letter-spacing:0"> - PAGE - 1</span>';
    //load trang đầu tiên
    load_sp_tim_kiem_theo_trang(0);
    trang[0].className = 'so_trang block_trang';

    document.getElementsByClassName('small_txt')[0].innerHTML = 'KẾT QUẢ TÌM KIẾM (' + dem + ')';
    document.getElementsByClassName('khung_sp_header')[1].style.display = 'none';
    document.getElementsByClassName('thanh_tim_kiem_nang_cao')[0].style.display = 'block';
}

function load_sp_tim_kiem_theo_trang(n) {
    var sp_tim_thay = document.getElementsByClassName('product-box');
    var dem = 0;
    for (var i = 0; i < sp_tim_thay.length; i++) {
        sp_tim_thay[i].style.display = 'none';
    }
    for (var i = n; i < sp_tim_thay.length && dem < 12; i++) {
        dem++;
        sp_tim_thay[i].style.display = 'block';
    }
}

function tim_kiem_nang_cao() {
    var noi_dung = document.getElementById('noi_dung_tknc').value;
    var gia = document.getElementById('gia_id').value;
    var loai = document.getElementById('loai_id').value;
    var url = window.location.href.split('search=');
    noi_dung = spc_to_plus(xoa_dau(noi_dung));
    console.log(noi_dung);
    window.location.href = url[0] + 'search=' + noi_dung + '&' + gia + '&' + loai;
}


function search_selected() {
    var url = window.location.href.split('&');
    var opt = document.getElementsByTagName('option');
    for (var i = 0; i < opt.length; i++) {
        if (url[2] == opt[i].value || url[1] == opt[i].value) {
            opt[i].setAttribute('selected', '');
        }

    }
}

function search() {
    var search_content = document.getElementById('search_txt').value;
    window.location.href = 'index.html?search=' + spc_to_plus(xoa_dau(search_content)) + '&-1&-1';
}


function spc_to_plus(str) {
    str = str.replace(/ /g, "+");
    return str;
}

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
//

function scroll_to_top() {

    var btn = document.getElementsByClassName('scroll_to_top')[0];
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 130) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });


    btn.onclick = function() {
        document.documentElement.scrollTop = 0;
    };
}



function check_tai_khoan() {
    var login = document.getElementById('login');
    var dang_ky = document.getElementById('dang_ky');
    if (localStorage.getItem('tai_khoan')) {
        var tk = JSON.parse(localStorage.getItem('tai_khoan'));
        if (tk.trang_thai_dang_nhap == 1) {
            login.innerHTML = tk.ten_tk;
            //       login.style.pointerEvents = 'none';
            login.style.color = '#ff9a00';
            login.style.fontWeight = 'bold';
            login.style.borderBottom = '2px solid #ff9a00';
            login.setAttribute('href', '#');
            login.setAttribute('title', 'Xin Chào ' + JSON.parse(localStorage.getItem('tai_khoan')).ten_tk);

            login.addEventListener('click', function(e) {
                console.log('run 444');
                document.getElementsByClassName('thong_tin_khach_hang')[0].style.display = 'block';
                document.getElementsByClassName('user')[0].innerHTML = tk.ten_tk;
                document.getElementsByClassName('ho_ten')[0].innerHTML = 'HỌ TÊN :    ' + tk.ho_ten;
                document.getElementsByClassName('email')[0].innerHTML = 'EMAIL :    ' + tk.email;
                document.getElementsByClassName('gioi_tinh')[0].innerHTML = 'GIỚI TÍNH :    ' + tk.gioi_tinh;
                document.getElementsByClassName('sdt')[0].innerHTML = 'SỐ ĐIỆN THOẠI :    ' + tk.sdt;
                document.getElementsByClassName('ngay_sinh')[0].innerHTML = 'NGÀY SINH :    ' + tk.ngay_sinh;

                document.getElementsByClassName('btn_x')[0].addEventListener('click', function(e) {
                    document.getElementsByClassName('thong_tin_khach_hang')[0].style.display = 'none';
                });

            });

            dang_ky.innerHTML = 'ĐĂNG XUẤT';
            dang_ky.setAttribute('href', '');
            dang_ky.addEventListener('click', function(e) {
                tk.trang_thai_dang_nhap = 0;
                localStorage.setItem('tai_khoan', JSON.stringify(tk));
                //localStorage.removeItem('tai_khoan');
                location.reload();
            });
        }

    }
}

function dang_nhap_fuc() {
    // document.getElementsByClassName('submit')[0].addEventListener('click', function() {
    if (localStorage.getItem('tai_khoan')) {
        var n = document.getElementById('dangnhap').value;
        var p = document.getElementById('matkhau').value;
        var tk = localStorage.getItem('tai_khoan');
        tk = JSON.parse(tk);
        if ((n == tk.email || n == tk.sdt) && p == tk.mat_khau) {
            tk.trang_thai_dang_nhap = 1;
            localStorage.setItem('tai_khoan', JSON.stringify(tk));
            alert('Đăng nhập thành công');
            window.location = 'index.html';
        } else {
            alert('Tài khoản không tồn tại');
        }
    } else {
        alert('Tài khoản không tồn tại');
    }
    //});

}

function dang_ky_func(e) {
    // e.addEventListener('click', function(e) {
    var ngay = document.getElementById('ngay').value;
    var thang = document.getElementById('thang').value;
    var nam = document.getElementById('nam').value;

    var obj = {
        ten_tk: document.getElementById('hoten').value,
        mat_khau: document.getElementById('pass').value,
        gioi_tinh: document.getElementById('sex').value,
        sdt: document.getElementById('phone').value,
        ho_ten: document.getElementById('hoten').value,
        email: document.getElementById('email').value,
        ngay_sinh: ngay + '/' + thang + '/' + nam,
        trang_thai_dang_nhap: 0
    };
    localStorage.setItem('tai_khoan', JSON.stringify(obj));
    alert('Đăng ký thành công');
    window.location = 'login.html';
    // });
}

// function fixed_laptop_title_func() {
//     var a = document.getElementsByClassName('product-box');
//     for (var i = 0; i < a.length; i++) {
//         if (a[i].innerHTML.indexOf('laptop') !== -1) {
//             document.getElementsByClassName('ten-sp')[i].className += ' fixed_laptop_title';
//         }
//     }
// }

function fixed_product_title() {
    var a = document.getElementsByClassName('ten-sp');
    for (var i = 0; i < a.length; i++) {
        if (a[i].clientHeight >= 35 || a[i].offsetHeight >= 35) {
            a[i].className += ' fixed_title';
            document.getElementsByClassName('hinh')[i].style.height = '200px';
            console.log(a[i]);
            console.log('run');
        }
    }
}
//
//chạy JS
window.addEventListener('load', click_add_to_cart);
window.addEventListener('load', check_tai_khoan);
window.addEventListener('load', fixed_product_title);

function gio_hang() {
    slide_show();
    load_gio_hang();
    fixedElement();
    create_left_menu();
    click_delete_cart();
    tinh_tong_tien();
    scroll_to_top();
    go_to_content();
}

function thong_tin_sp() {
    url_chi_tiet_sp();
    slide_show();
    fixedElement();
    create_left_menu();
    set_value_ttsp_them();
    scroll_to_top();
}

function trang_chinh() {
    var them = document.getElementsByClassName('them');
    scroll_to_top();
    slide_show();
    fixedElement();
    create_left_menu();
    if (window.location.href.indexOf('?') === -1) {
        create_box();
    } else if (window.location.href.indexOf('search=') === -1) {
        phan_tich_url();
    }
    if (window.location.href.indexOf('search=') != -1) {
        load_tim_kiem();
    }
}
//trang đăng nhập
function login() {
    slide_show();
    fixedElement();
    go_to_content();
    create_left_menu();
    scroll_to_top();
    // dang_nhap_fuc();
}
//
function dang_ky() {
    slide_show();
    fixedElement();
    go_to_content();
    create_left_menu();
    scroll_to_top();
    //dang_ky_func(document.getElementsByClassName('submit-dk')[0]);
}